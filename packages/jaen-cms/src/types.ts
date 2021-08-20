import type {Jaen} from '@snek-at/jaen'

import {InitValueType} from './containers/fields/StreamField/types'

export type JaenCMS = {
  config: Jaen['config'] & {
    plugins: {
      cms: {
        templates: typeof module[]
      }
    }
  }
}

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
}

type BasePageType = {
  slug: string
  pageMetadata: PageMetadata
  fields: {
    [fieldName: string]: Field
  }
}

export interface PageType extends BasePageType {
  parent: {
    id: string
  } | null
  children: {id: string}[]
  /**
   * dynamic: true if the page is a dynamic page (not a static page).
   * Leads to a different template and different routing behaviour.
   *
   * Dynamic is true when:
   *  1. A page is created
   *  2. A page is deleted
   *  3. A page is moved to a different parent or renamed (path change)
   *
   * Dynamic is false when:
   *  1. Field content is changed
   *  2. Page meta data is changed
   *  3. Page children are changed
   */
  dynamic?: true
  /**
   * template: holds the template name for the page.
   * This is null for static pages unhandled by the CMS (except fields).
   */
  template: string | null
  deleted?: true
}

export interface ResolvedPageType extends BasePageType {
  parent: {
    page: BasePageType
  } | null
  children: {
    page: BasePageType
  }[]
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
