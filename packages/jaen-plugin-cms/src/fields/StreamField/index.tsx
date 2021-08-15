/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {SFWrapper} from '@snek-at/jaen-shared-ui'
import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {GenericBC} from '../../blocks'
import {merge} from '../../common/utils'
import {useAppDispatch, useAppSelector} from '../../store'
import {registerPageField} from '../../store/actions/pagesActions'
import {pageFieldBlocksSelector} from '../../store/selectors/pages'
import {InitValueType} from './types'

type StreamFieldProps = {
  fieldName: string
  initValue: InitValueType
  blocks: GenericBC[]
  reverseOrder?: boolean
}

const StreamField: React.FC<StreamFieldProps> = ({
  fieldName,
  initValue,
  blocks,
  reverseOrder
}) => {
  const dispatch = useAppDispatch()

  const path = '/'

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref && ref.current) {
      setHeight(ref.current.clientHeight)
      setWidth(ref.current.clientWidth)
    }
  }, [ref.current?.clientHeight, ref.current?.clientWidth])

  const editing = true //useAppSelector(({cms}) => cms.options.editing)

  const storeBlocks = useSelector(pageFieldBlocksSelector(path, fieldName))

  const allBlocks = merge(
    initValue,
    storeBlocks,
    value => value.deleted
  ) as typeof storeBlocks

  const blocksKeys = Object.keys(allBlocks).sort(
    (a, b) => parseInt(a) - parseInt(b)
  )

  const addBlock = (typeName: string): void => {
    let position
    if (blocksKeys.length > 0) {
      position = Math.min(...blocksKeys.map(e => parseInt(e)))
    } else {
      position = 0
    }

    if (reverseOrder) {
      position++
    } else {
      position--
    }

    dispatch(
      registerPageField({
        path,
        field: {
          fieldName,
          block: {
            position,
            typeName
          }
        }
      })
    )
  }

  const blocksTypes = blocks.map(block => ({
    id: block.BlockType,
    name: block.BlockType,
    onClick: () => addBlock(block.BlockType)
  }))

  const getBlockComponentByTypeName = (
    typeName: string
  ): GenericBC | undefined => blocks.find(b => b.BlockType === typeName)

  const renderBlock = (position: number): JSX.Element | undefined => {
    const blockTypeName = allBlocks?.[position].typeName

    if (blockTypeName) {
      const Block = getBlockComponentByTypeName(blockTypeName)

      return (
        <>
          {Block ? (
            <Block
              streamFieldHeight={height}
              streamFieldWidth={width}
              fieldOptions={{
                fieldName,
                initValue: initValue[position],
                block: {position, typeName: Block.BlockType}
              }}
            />
          ) : null}
        </>
      )
    }
  }

  const renderedBlocks = blocksKeys.map((position, key) => (
    <div>{renderBlock(parseInt(position))}</div>
  ))

  if (editing) {
    return (
      <SFWrapper ref={ref} fieldName={fieldName} blockTypes={blocksTypes}>
        {renderedBlocks}
      </SFWrapper>
    )
  }

  return <>{renderedBlocks}</>
}

export default StreamField
