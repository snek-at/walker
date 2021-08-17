import {createAction} from '@reduxjs/toolkit'

import {FieldIdentifier, FieldUpdateDetails, PageType} from '../../types'

export type AddPageActionPayload = {
  path: string
  page: PageType
}
export const addPage = createAction<number>('foo/count')
export const deletePage = createAction<number>('foo/count')

export type UpdatePageMetaActionPayload = {
  path: string
  meta: Partial<PageType['pageMetadata']>
}
export const updatePageMeta = createAction<UpdatePageMetaActionPayload>(
  'site/updatePageMeta'
)

export type RegisterPageFieldActionPayload = {
  path: string
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
  path: string
  field: FieldIdentifier
}
export const unregisterPageField = createAction<UnregisterPageFieldActionPayload>(
  'site/unregisterPageField'
)

export type DeletePageFieldActionPayload = {
  path: string
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
  path: string
  fieldDetails: FieldUpdateDetails
}
export const updatePageField = createAction<UpdatePageFieldActionPayload>(
  'site/updatePageField'
)
