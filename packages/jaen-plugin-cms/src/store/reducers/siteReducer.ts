import {createReducer, PayloadAction} from '@reduxjs/toolkit'

import {BlocksField, PlainField} from '../../types'
import * as actions from '../actions/siteActions'
import {SiteState} from '../types/site'

const initialState: SiteState = {}

const siteReducer = createReducer(initialState, {
  [actions.registerPageField.type]: (
    state,
    action: PayloadAction<actions.RegisterPageFieldActionPayload>
  ) => {
    const {path, field} = action.payload

    const f = state.allSitePage?.nodes?.[path]?.fields?.[field.fieldName]

    if (field.block) {
      const blockField = f as BlocksField

      state.allSitePage = {
        ...state.allSitePage,
        nodes: {
          ...state.allSitePage?.nodes,
          [path]: {
            ...state.allSitePage?.nodes?.[path],
            fields: {
              ...state.allSitePage?.nodes?.[path]?.fields,
              [field.fieldName]: {
                ...blockField,
                _type: 'BlocksField',
                blocks: {
                  ...blockField?.blocks,
                  [field.block.position]: {
                    ...blockField?.blocks?.[field.block.position],
                    typeName: field.block.typeName,
                    fields: field.block.blockFieldName
                      ? {
                          ...blockField?.blocks?.[field.block.position]?.fields,
                          [field.block.blockFieldName]: {}
                        }
                      : {}
                  }
                }
              }
            }
          }
        }
      }
    } else {
      const plainField = f as PlainField

      state.allSitePage = {
        ...state.allSitePage,
        nodes: {
          ...state.allSitePage?.nodes,
          [path]: {
            ...state.allSitePage?.nodes?.[path],
            fields: {
              ...state.allSitePage?.nodes?.[path]?.fields,
              [field.fieldName]: {
                ...plainField,
                _type: 'PlainField'
              }
            }
          }
        }
      }
    }
  },
  [actions.unregisterPageField.type]: (
    state,
    action: PayloadAction<actions.UnregisterPageFieldActionPayload>
  ) => {
    const {path, field} = action.payload

    const nodeFields = state.allSitePage?.nodes?.[path]?.fields

    if (field.block) {
      if (field.block.blockFieldName) {
        delete (nodeFields?.[field.fieldName] as BlocksField).blocks?.[
          field.block.position
        ]?.fields?.[field.block.blockFieldName]
      } else {
        delete (nodeFields?.[field.fieldName] as BlocksField).blocks?.[
          field.block.position
        ]
      }
    } else {
      delete nodeFields?.[field.fieldName]
    }
  },
  [actions.deletePageField.type]: (
    state,
    action: PayloadAction<actions.DeletePageFieldActionPayload>
  ) => {
    const {path, field} = action.payload

    const f = state.allSitePage?.nodes?.[path]?.fields?.[field.fieldName]

    if (field.block) {
      const blockField = f as BlocksField

      state.allSitePage = {
        ...state.allSitePage,
        nodes: {
          ...state.allSitePage?.nodes,
          [path]: {
            ...state.allSitePage?.nodes?.[path],
            fields: {
              ...state.allSitePage?.nodes?.[path]?.fields,
              [field.fieldName]: {
                ...blockField,
                _type: 'BlocksField',
                blocks: {
                  ...blockField?.blocks,
                  [field.block.position]: {
                    ...blockField?.blocks?.[field.block.position],
                    deleted: true
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  [actions.updatePageField.type]: (
    state,
    action: PayloadAction<actions.UpdatePageFieldActionPayload>
  ) => {
    const {path, fieldDetails} = action.payload

    if (fieldDetails._type === 'BlocksField') {
      ;(state.allSitePage?.nodes?.[path]?.fields?.[
        fieldDetails.fieldName
      ] as BlocksField).blocks[fieldDetails.blockPosition].fields[
        fieldDetails.blockFieldName
      ] = fieldDetails.block
    } else if (fieldDetails._type === 'PlainField') {
      ;(state.allSitePage?.nodes?.[path]?.fields?.[
        fieldDetails.fieldName
      ] as PlainField).content = fieldDetails.block
    }
  }
})

export default siteReducer
