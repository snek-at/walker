import {createReducer, PayloadAction} from '@reduxjs/toolkit'

import * as actions from '../actions/pagesActions'
import {BlocksField, Field, PagesState, PlainField} from '../types/pages'

const initialState: PagesState = {
  distinct: {static: [], dynamic: []},
  nodes: {}
}

const pagesReducer = createReducer(initialState, {
  [actions.registerPageField.type]: (
    state,
    action: PayloadAction<actions.RegisterPageFieldActionPayload>
  ) => {
    const {path, field} = action.payload

    const f = state.nodes?.[path]?.fields?.[field.fieldName]

    if (field.block) {
      const blockField = f as BlocksField

      state.nodes = {
        ...state.nodes,
        [path]: {
          ...state.nodes?.[path],
          fields: {
            ...state.nodes?.[path]?.fields,
            [field.fieldName]: {
              ...blockField,
              _type: 'BlocksField',
              blocks: {
                ...blockField?.blocks,
                [field.block.position]: {
                  ...blockField?.blocks[field.block.position],
                  typeName: field.block.typeName,
                  fields: {
                    ...blockField?.blocks[field.block.position].fields,
                    [field.block.blockFieldName]: {}
                  }
                }
              }
            }
          }
        }
      }
    } else {
      const plainField = f as PlainField

      state.nodes = {
        ...state.nodes,
        [path]: {
          ...state.nodes?.[path],
          fields: {
            ...state.nodes?.[path]?.fields,
            [field.fieldName]: {
              ...plainField,
              _type: 'PlainField'
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

    const nodeFields = state.nodes[path]?.fields

    if (field.block) {
      delete (nodeFields?.[field.fieldName] as BlocksField).blocks?.[
        field.block.position
      ]?.fields?.[field.block.blockFieldName]
    } else {
      delete nodeFields?.[field.fieldName]
    }
  },
  [actions.updatePageField.type]: (
    state,
    action: PayloadAction<actions.UpdatePageFieldActionPayload>
  ) => {
    const {path, fieldDetails} = action.payload

    if (fieldDetails._type === 'BlocksField') {
      ;(state.nodes[path]?.fields?.[
        fieldDetails.fieldName
      ] as BlocksField).blocks[fieldDetails.blockPosition].fields[
        fieldDetails.blockFieldName
      ] = fieldDetails.block
    } else if (fieldDetails._type === 'PlainField') {
      ;(state.nodes[path]?.fields?.[
        fieldDetails.fieldName
      ] as PlainField).content = fieldDetails.block
    }
  }
})

export default pagesReducer