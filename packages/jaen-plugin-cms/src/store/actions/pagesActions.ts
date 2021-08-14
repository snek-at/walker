import {createAction} from '@reduxjs/toolkit'

import {FieldIdentifier} from '../../types'
import {FieldUpdateDetails, Page, PageMeta} from '../types/pages'

export type AddPageActionPayload = {
  path: string
  page: Page
}
export const addPage = createAction<number>('foo/count')
export const deletePage = createAction<number>('foo/count')

export type UpdatePageMetaActionPayload = {
  path: string
  meta: Partial<PageMeta>
}
export const updatePageMeta = createAction<UpdatePageMetaActionPayload>(
  'pages/updatePageMeta'
)

export type RegisterPageFieldActionPayload = {
  path: string
  field: FieldIdentifier
}
export const registerPageField = createAction<RegisterPageFieldActionPayload>(
  'pages/registerPageField'
)

export type UnregisterPageFieldActionPayload = {
  path: string
  field: FieldIdentifier
}
export const unregisterPageField = createAction<UnregisterPageFieldActionPayload>(
  'pages/unregisterPageField'
)

export type UpdatePageFieldActionPayload = {
  path: string
  fieldDetails: FieldUpdateDetails
}
export const updatePageField = createAction<UpdatePageFieldActionPayload>(
  'pages/updatePageField'
)
