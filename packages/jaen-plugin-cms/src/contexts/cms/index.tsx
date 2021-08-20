import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import loadable from '@loadable/component'
import * as buffer from 'buffer'
// import {PageTree} from '@snek-at/jaen-shared-ui'
import {StaticQuery, graphql} from 'gatsby'
import {createContext, useContext} from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import * as ts from 'typescript'

import {merge} from '../../common/utils'
import Overlay from '../../containers/Overlay'
import {store, useAppSelector} from '../../store'
import {DesignProvider} from '../../tools/chakra-ui'
import {PageMetadata, PageType, ResolvedPageType} from '../../types'
import {SiteType} from '../../types'

type CMSContextType = {
  site: SiteType
  templates: JSX.Element[]
}

const CMSContext = createContext<CMSContextType | undefined>(undefined)

export const useCMSContext = (): CMSContextType => {
  const context = useContext(CMSContext)

  if (context === undefined) {
    throw new Error('useCMSContext must be within CMSContext')
  }

  return context
}

export const usePage = (id: string): ResolvedPageType => {
  const context = useCMSContext()
  const nodes = context.site.allSitePage.nodes
  const relations = nodes[id].relations

  let resolvedPage = {} as ResolvedPageType

  const transformToBasePage = (node: PageType) => ({
    pageMetadata: node.pageMetadata,
    fields: node.fields
  })

  resolvedPage.relations.parent = relations.parent
    ? transformToBasePage(nodes[relations.parent])
    : null
  resolvedPage.relations.children = relations.children.map((childId: string) =>
    transformToBasePage(nodes[childId])
  )

  return resolvedPage
}

export const useSiteMetadata = () => {
  const context = useCMSContext()
  const storeSiteMetadata = useAppSelector(state => state.site.siteMetadata)

  return merge(context.site.siteMetadata, storeSiteMetadata || {})
}

export const useAllSitePage = () => {
  const context = useCMSContext()
  const storePages = useAppSelector(state => state.site.allSitePage)

  return merge(context.site.allSitePage, storePages || {})
}

type CMSProviderType = {
  templates: JSX.Element[]
}

export const CMSProvider: React.FC<CMSProviderType> = ({
  children,
  ...props
}) => {
  // Perf: Querying all the CMS pages in the CMSProvider may be slow, although it's
  // the fastest implementation. In future the PageProvider itself should query
  // its page content along with children and parent page.

  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              image
              author {
                name
              }
              organization {
                name
                url
                logo
              }
              social {
                twitter
                fbAppID
              }
            }
          }
          allSitePage {
            nodes {
              children {
                id
              }
              parent {
                id
              }
              id
            }
          }
        }
      `}
      render={({site: {siteMetadata}, allSitePage}) => {
        const structure = allSitePage as {
          nodes: {
            id: string
            children: {id: string}[]
            parent: {id: string} | null
          }[]
        }

        const tmpPageMetadata: PageMetadata = {
          title: '',
          description: '',
          image: '',
          canonical: '',
          datePublished: '',
          social: {twitter: '', fbAppId: ''},
          isBlogPost: false
        }

        const site: SiteType = {
          siteMetadata,
          allSitePage: {
            rootNodeIds: [],
            nodes: {}
          }
        }

        for (const node of structure.nodes) {
          if (node.parent === null) {
            site.allSitePage.rootNodeIds.push(node.id)
          }

          site.allSitePage.nodes[node.id] = {
            fields: {},
            pageMetadata: tmpPageMetadata,
            relations: {
              parent: node.parent?.id || null,
              children: node.children.map(child => child.id)
            }
          }
        }

        return (
          <CMSContext.Provider
            value={{
              site,
              templates: props.templates
            }}>
            <DesignProvider>
              <Overlay />
            </DesignProvider>

            {children}
          </CMSContext.Provider>
        )
      }}
    />
  )
}

export default CMSProvider
