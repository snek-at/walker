// require = require('esm')(module)
import type {GatsbyNode} from 'gatsby'
import * as path from 'path'

// export const onCreateNode: GatsbyNode['onCreateNode'] = ({
//   node,
//   getNode,
//   actions
// }) => {
//   const {createNodeField} = actions
//   if (node.internal.type === `SitePage`) {
//     console.log(getNode(node.id))
//     createNodeField({
//       node,
//       name: `id`,
//       value: 'uuid-uuid-zuuid'
//     })
//     createNodeField({
//       node,
//       name: `parentId`,
//       value: 'null'
//     })
//     createNodeField({
//       node,
//       name: `childIds`,
//       value: ['uuid-uuid-zuuid'.repeat(10)]
//     })
//     createNodeField({
//       node,
//       name: `pageName`,
//       value: ''
//     })
//   }
// }

// export const createPages: GatsbyNode['createPages'] = ({actions}) => {
//   const {createPage} = actions

//   createPage({
//     path: '/sample',
//     component:
//       '/workspaces/walker/examples/my-gatsby-site/.cache/dev-404-page.js',
//     // In your blog post template's graphql query, you can use pagePath
//     // as a GraphQL variable to query for data from the markdown file.
//     context: {
//       id: '',
//       parentId: null,
//       childIds: [],
//       pageName: 'hello-world'
//     }
//   })
// }

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  // const pages = [
  //   {
  //     path: '/hello-world',
  //     id: 'uuid-hello-world',
  //     parentId: null,
  //     childIds: [],
  //     template: 'BlogPage',
  //     pageMetadata: {
  //       title: '',
  //       description: '',
  //       image: '',
  //       canonical: '',
  //       datePublished: '',
  //       social: {twitter: '', fbAppId: ''},
  //       isBlogPost: false
  //     }
  //   },
  //   {
  //     path: '/hello-world-child',
  //     id: 'uuid-hello-world-child',
  //     parentId: 'uuid-hello-world',
  //     childIds: [],
  //     template: 'BlogPost',
  //     pageMetadata: {
  //       title: '',
  //       description: '',
  //       image: '',
  //       canonical: '',
  //       datePublished: '',
  //       social: {twitter: '', fbAppId: ''},
  //       isBlogPost: false
  //     }
  //   },
  //   {
  //     path: '/hello-world2',
  //     id: 'uuid-hello-world2',
  //     parentId: null,
  //     childIds: [],
  //     template: null,
  //     pageMetadata: {
  //       title: '',
  //       description: '',
  //       image: '',
  //       canonical: '',
  //       datePublished: '',
  //       social: {twitter: '', fbAppId: ''},
  //       isBlogPost: false
  //     }
  //   }
  // ]

  const pages = []

  // loop 500 times
  for (let i = 0; i < 500; i++) {
    pages.push({
      slug: 'hello-world' + i,
      path: '/hello-world' + i,
      id: 'hello-world' + i,
      parentId: null,
      childIds: [],
      template: 'BlogPage',
      pageMetadata: {
        title: '',
        description: '',
        image: '',
        canonical: 'https://snek.at/hello-world' + i,
        datePublished: '',
        social: {twitter: '', fbAppId: ''},
        isBlogPost: false
      }
    })
  }

  pages.map(page =>
    actions.createNode({
      path: page.path,
      id: page.id,
      slug: page.slug,
      parent: page.parentId,
      children: page.childIds,
      template: page.template,
      pageMetadata: page.pageMetadata,
      internal: {
        type: 'JaenPage',
        contentDigest: createContentDigest(page),
        content: JSON.stringify(page)
      }
    })
  )
}

// export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
//   graphql,
//   actions,
//   reporter
// }) => {
//   const { createPage } = actions
//   // Query for markdown nodes to use in creating pages.
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(limit: 1000) {
//           edges {
//             node {
//               frontmatter {
//                 path
//               }
//             }
//           }
//         }
//       }
//     `
// }
