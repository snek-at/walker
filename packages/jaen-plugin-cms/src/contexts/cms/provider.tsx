import {Button, ChakraProvider, extendTheme} from '@chakra-ui/react'
import {StaticQuery, graphql} from 'gatsby'

import {CMSContext, CMSContextType} from './context'

const theme = extendTheme({})

export const CMSProvider: React.FC<CMSContextType> = ({children, ...props}) => {
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

              {children}
            </ChakraProvider>
          </CMSContext.Provider>
        )
      }}
    />
  )
}

export default CMSProvider
