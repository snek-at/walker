import {DeepPartial} from '@chakra-ui/react'
import {createSelector} from '@reduxjs/toolkit'

import {RootState} from '..'
import {BlocksField, PlainField} from '../types/pages'
import {ContentBlocks} from '../types/pages/blocks'

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
