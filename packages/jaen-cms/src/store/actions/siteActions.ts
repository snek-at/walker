import {createAction} from '@reduxjs/toolkit'

import {FieldIdentifier, FieldUpdateDetails, PageType} from '../../types'

export type AddPageActionPayload = {
  name: string
  page: PageType
}
export const addPage = createAction<AddPageActionPayload>('site/addPage')
export const deletePage = createAction<number>('site/deletePage')

export type MovePageActionPayload = {
  pageId: string
  parentPageId: string
}
export const movePage = createAction<MovePageActionPayload>('site/movePage')

export type UpdatePageMetaActionPayload = {
  pageId: string
  meta: Partial<PageType['pageMetadata']>
}
export const updatePageMeta = createAction<UpdatePageMetaActionPayload>(
  'site/updatePageMeta'
)

export type RegisterPageFieldActionPayload = {
  pageId: string
  field: {
    fieldName: string
    block?: {
      typeName: string
      position: number
      blockFieldName?: string
    }
  }
}
export const registerPageField = createAction<RegisterPageFieldActionPayload>(
  'site/registerPageField'
)

export type UnregisterPageFieldActionPayload = {
  pageId: string
  field: {
    fieldName: string
    block?: {
      position: number
      blockFieldName?: string
    }
  }
}
export const unregisterPageField = createAction<UnregisterPageFieldActionPayload>(
  'site/unregisterPageField'
)

export type DeletePageFieldActionPayload = {
  pageId: string
  field: {
    fieldName: string
    block?: {
      position: number
      blockFieldName?: string
    }
  }
}
export const deletePageField = createAction<DeletePageFieldActionPayload>(
  'site/deletePageField'
)

export type UpdatePageFieldActionPayload = {
  pageId: string
  fieldDetails: FieldUpdateDetails
}
export const updatePageField = createAction<UpdatePageFieldActionPayload>(
  'site/updatePageField'
)
