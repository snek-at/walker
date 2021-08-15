/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import * as React from 'react'

import {FieldIdentifier, StreamBlockIdentifier} from './types'

/**
 * Block Component
 */
export interface BC<T>
  extends React.FC<{
    streamFieldHeight: number
    streamFieldWidth: number
    fieldOptions: StreamBlockIdentifier
  }> {
  BlockType: string
  BlockFields: {
    [name in keyof T]: React.ComponentType<FieldIdentifier>
  }
  defaultValues: T
}

export type GenericBC = BC<{
  [name: string]: React.ComponentType<FieldIdentifier>
}>

type MappingType<T> = {[name in keyof T]: JSX.Element}

export function prepareBlocks<T>(
  Block: BC<T>,
  fieldOptions: StreamBlockIdentifier
): MappingType<T> {
  type keys = keyof typeof Block.BlockFields
  const blockFieldNames = Object.keys(Block.BlockFields) as keys[]

  const mapping: MappingType<T> = {} as MappingType<T>

  for (const blockFieldName of blockFieldNames) {
    const Field: React.ComponentType<FieldIdentifier> =
      Block.BlockFields[blockFieldName]

    if (fieldOptions.block) {
      const value = fieldOptions.initValue?.fields[blockFieldName as string]

      let initValue = undefined

      if (value?._type === 'TextBlock') {
        initValue = value.text
      } else if (value?._type === 'FileBlock') {
        initValue = value.index
      }

      console.log('configuredfield', fieldOptions)

      const ConfiguredField = (
        <Field
          {...fieldOptions}
          initValue={initValue}
          block={{
            ...fieldOptions.block,
            blockFieldName: blockFieldName as string
          }}
        />
      )

      mapping[blockFieldName] = ConfiguredField
    }
  }

  return mapping
}
