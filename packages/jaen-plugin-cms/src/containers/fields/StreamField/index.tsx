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
import React, {useEffect, useState, useRef, useMemo} from 'react'
import {useCallback} from 'react'
import {useDispatch, useSelector, useStore} from 'react-redux'

import {merge} from '../../../common/utils'
import {
  RootState,
  useAppDispatch,
  useAppSelector,
  useAppState
} from '../../../store'
import {
  deletePageField,
  registerPageField,
  unregisterPageField
} from '../../../store/actions/siteActions'
import {pageFieldBlocksSelector} from '../../../store/selectors/pages'
import {BlocksField} from '../../../types'
import {BlockItem, GenericBC, prepareBlocks} from '../../blocks'
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
  const appState = useAppState()
  const path = 'SitePage /'

  // const [SFBlocks, setSFBlocks] = useState(
  //   (appState.site.allSitePage?.nodes?.[path]?.fields?.[
  //     fieldName
  //   ] as BlocksField)?.blocks
  // )

  const SFBlocks = useAppSelector(
    pageFieldBlocksSelector(path, fieldName),
    (l, r) => {
      const shouldUpdate =
        JSON.stringify(Object.keys(l)) !== JSON.stringify(Object.keys(r))

      if (shouldUpdate) {
        return false
      }

      for (const key in l) {
        if (l[key].deleted !== r[key].deleted) {
          return false
        }
      }

      return true
    }
  )

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

  const visibleBlocks = useMemo(
    () => merge(initValue, SFBlocks, value => value.deleted) as typeof SFBlocks,
    [initValue, SFBlocks]
  )

  const allBlocks = useMemo(
    () => merge(initValue, SFBlocks) as typeof SFBlocks,
    [initValue, SFBlocks]
  )

  const visibleBlocksKeys = Object.keys(visibleBlocks).sort(
    (a, b) => parseInt(a) - parseInt(b)
  )

  const allBlocksKeys = Object.keys(allBlocks).sort(
    (a, b) => parseInt(a) - parseInt(b)
  )

  const addBlock = (typeName: string): void => {
    let position
    if (allBlocksKeys.length > 0) {
      position = Math.min(...allBlocksKeys.map(e => parseInt(e)))
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

  const deleteBlock = useCallback((position: string) => {
    const payload = {
      path,
      field: {
        fieldName,
        block: {
          position: parseInt(position)
        }
      }
    }
    // check if position is in initValue, if not, unregister it instead of deleting it
    if (position in initValue) {
      dispatch(deletePageField(payload))
    } else {
      dispatch(unregisterPageField(payload))
    }
  }, [])

  const blocksTypes = blocks.map(block => ({
    id: block.BlockType,
    name: block.BlockType,
    onClick: () => addBlock(block.BlockType)
  }))

  const getBlockComponentByTypeName = (
    typeName: string
  ): GenericBC | undefined => blocks.find(b => b.BlockType === typeName)

  const renderedBlocks = visibleBlocksKeys.map(position => {
    const BlockComponent = getBlockComponentByTypeName(
      allBlocks?.[position].typeName
    )

    if (BlockComponent) {
      const block = {
        position: parseInt(position),
        typeName: BlockComponent.BlockType
      }

      return (
        <BlockItem
          key={position}
          position={position}
          fieldName={fieldName}
          Block={BlockComponent}
          block={block}
          initValue={allBlocks[position]}
          height={height}
          width={width}
          onDelete={deleteBlock}
        />
      )
    }
  })

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
