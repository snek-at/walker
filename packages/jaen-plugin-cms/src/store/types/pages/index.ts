import {DeepPartial} from '@reduxjs/toolkit'

import * as blocks from './blocks'

export type BlocksField = {
  _type: 'BlocksField'
  blocks: {
    [position: string]: blocks.CustomBlock
  }
  deleted?: true
}

export type PlainField = {
  _type: 'PlainField'
  content: blocks.ContentBlocks
}

export type Field = PlainField | BlocksField

export type PageMeta = {
  title: string
  description: string
  image: string
  article: boolean
}

export type Page = {
  parent: string | null
  children: string[]
  meta: PageMeta
  fields: {
    [fieldName: string]: Field
  }
  deleted?: true
}

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
  nodes: DeepPartial<{[path: string]: Page}>
}

type BlocksFieldDetails = {
  _type: 'BlocksField'
  blockFieldName: string
  blockPosition: number
}

type PlainFieldDetails = {
  _type: 'PlainField'
}

export type FieldUpdateDetails = (BlocksFieldDetails | PlainFieldDetails) & {
  fieldName: string
  block: blocks.ContentBlocks
}

// Ref: https://github.com/gatsbyjs/gatsby/issues/23239#issuecomment-615482655 (hydrate redux store with data from gatsby)
// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
