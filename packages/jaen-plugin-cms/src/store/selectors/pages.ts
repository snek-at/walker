import {DeepPartial} from '@chakra-ui/react'
import {createSelector} from '@reduxjs/toolkit'

import {RootState} from '..'
import {compactObject} from '../../common/utils'
import {BlocksField, PlainField, ContentBlocks} from '../../types'

export const pageFieldContentSelector = (
  path: string,
  fieldName: string,
  block?: {typeName: string; position: number; blockFieldName: string}
) =>
  createSelector<
    RootState,
    ContentBlocks | undefined,
    DeepPartial<ContentBlocks> | undefined
  >(
    state =>
      block
        ? (state.pages.nodes?.[path]?.fields?.[fieldName] as
            | BlocksField
            | undefined)?.blocks?.[block.position]?.fields?.[
            block.blockFieldName
          ]
        : (state.pages.nodes?.[path]?.fields?.[fieldName] as
            | PlainField
            | undefined)?.content,
    field => {
      return field
    }
  )

export const pageFieldBlocksSelector = (path: string, fieldName: string) =>
  createSelector<RootState, BlocksField['blocks'], BlocksField['blocks']>(
    state =>
      (state.pages.nodes?.[path]?.fields?.[fieldName] as BlocksField)?.blocks,
    blocks => blocks
  )
