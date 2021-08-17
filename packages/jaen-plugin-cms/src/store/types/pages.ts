import {DeepPartial} from '@reduxjs/toolkit'

import {PageType} from '../../types'

export type PagesState = {
  distinct: {
    /**
     * List of all page paths holding a static page (gatsby build)
     */
    static: string[]
    /**
     * List of all page paths holding a dynamic page (not gatsby build)
     */
    dynamic: string[]
  }
  nodes: DeepPartial<{[path: string]: PageType}>
}

// Ref: https://github.com/gatsbyjs/gatsby/issues/23239#issuecomment-615482655 (hydrate redux store with data from gatsby)
// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
