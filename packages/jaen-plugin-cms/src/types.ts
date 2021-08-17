import {InitValueType} from './fields/StreamField/types'

export type StreamBlockIdentifier = {
  initValue: InitValueType['string']
  fieldName: string
  block?: {typeName: string; position: number}
}

export type FieldIdentifier = {
  initValue: any
  fieldName: string
  block?: {typeName: string; position: number; blockFieldName: string}
}

export type TextBlock = {
  _type: 'TextBlock'
  text: string
}

export type FileBlock = {
  _type: 'FileBlock'
  /**
   * Reference to a DataLayerFiles[string] object
   */
  index: string
}

export type ContentBlocks = TextBlock | FileBlock

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
  block: ContentBlocks
}

export type CustomBlock = {
  typeName: string
  fields: {
    [name: string]: ContentBlocks
  }
  deleted?: true
}

export type BlocksField = {
  _type: 'BlocksField'
  blocks: {
    [position: string]: CustomBlock
  }
  deleted?: true
}

export type PlainField = {
  _type: 'PlainField'
  content: ContentBlocks
}

export type Field = PlainField | BlocksField

export type PageMetadata = {
  title: string
  description: string
  image: string
  /**
   * Link rel="canonical" will be used by search engines
   */
  canonical: string
  datePublished: string | false
  social: {
    twitter: string
    fbAppId: string
  }
  isBlogPost: boolean
  deleted?: true
}

type BasePageType = {
  pageMetadata: PageMetadata
  fields: {
    [fieldName: string]: Field
  }
}

export interface PageType extends BasePageType {
  relations: {
    parent: string | null
    children: string[]
  }
}

export interface ResolvedPageType extends BasePageType {
  relations: {
    parent: BasePageType | null
    children: BasePageType[]
  }
}

export type SiteType = {
  siteMetadata: {
    title: string
    description: string
    siteUrl: string
    image: string
    author: {
      name: string
    }
    organization: {
      name: string
      url: string
      logo: string
    }
    social: {
      twitter: string
      fbAppID: string
    }
  }
  allSitePage: {
    rootNodeIds: string[]
    nodes: {
      [id: string]: PageType
    }
  }
}

// Site Meta update
// site page structure update
// site page meta update
// site page field update
