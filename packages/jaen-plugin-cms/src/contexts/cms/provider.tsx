import {Button, ChakraProvider, extendTheme} from '@chakra-ui/react'
import {StaticQuery, graphql} from 'gatsby'

import {PageType, ResolvedPageType} from '../../types'
import {CMSContext, CMSContextType, useCMSContext} from './context'

const theme = extendTheme({})

export const usePage = (id: string): ResolvedPageType => {
  const context = useCMSContext()
  const nodes = context.site.allSitePage.nodes
  const relations = nodes[id].relations

  let resolvedPage = {} as ResolvedPageType

  const transformToBasePage = (node: PageType) => ({
    pageMetadata: node.pageMetadata,
    fields: node.fields
  })

  resolvedPage.relations.parent = transformToBasePage(nodes[relations.parent])
  resolvedPage.relations.children = relations.children.map((childId: string) =>
    transformToBasePage(nodes[childId])
  )

  return resolvedPage
}

export const CMSProvider: React.FC<CMSContextType> = ({children, ...props}) => {
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
        // merge with redux data

        return (
          <CMSContext.Provider
            value={{
              templates: props.templates,
              site: {siteMetadata, allSitePage}
            }}>
            <ChakraProvider theme={theme} resetCSS={false}>
              {'Overlay'}

              {JSON.stringify(siteMetadata)}
              {JSON.stringify(allSitePage)}

              {children}
            </ChakraProvider>
          </CMSContext.Provider>
        )
      }}
    />
  )
}

export default CMSProvider
