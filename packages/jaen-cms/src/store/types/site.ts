import {DeepPartial} from '@reduxjs/toolkit'

import {SiteType} from '../../types'

export type SiteState = DeepPartial<SiteType>

// Ref: https://github.com/gatsbyjs/gatsby/issues/23239#issuecomment-615482655 (hydrate redux store with data from gatsby)
// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
