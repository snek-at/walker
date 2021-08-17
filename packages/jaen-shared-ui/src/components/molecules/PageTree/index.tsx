import {Box} from '@chakra-ui/react'
import {useMemo} from 'react'
import {useState} from 'react'

import styled from '@emotion/styled'
import Tree, {
  mutateTree,
  moveItemOnTree,
  RenderItemParams,
  TreeItem,
  TreeData,
  ItemId,
  TreeSourcePosition,
  TreeDestinationPosition
} from '@atlaskit/tree'

import {TreeConverter} from './treeconverter'

type Item = {
  id: string
}

export interface ItemWithChildren extends Item {
  children: Item[]
}

type PageTreeProps = {
  items: ItemWithChildren[]
}

const PageTree: React.FC<PageTreeProps> = ({items}) => {
  // convert items to a set
  const tree = TreeConverter(items)

  console.log(tree)

  // const itemsSet = useMemo(() => new Set(items), [items])

  // const findItem = (id: string) => {
  //   for (const e of itemsSet) {
  //     if (e.id === id) {
  //       return e
  //     }
  //   }
  // }

  // return (
  //   <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
  //     {items.map((item, key) => (
  //       <div key={key}>{item.id}</div>
  //     ))}
  //   </Box>
  // )

  const PADDING_PER_LEVEL = 16
  const PreTextIcon = styled.span`
    display: inline-block;
    width: 16px;
    justify-content: center;
    cursor: pointer;
    margin-right: 5px;
  `

  const getIcon = (
    item: TreeItem,
    onExpand: (itemId: ItemId) => void,
    onCollapse: (itemId: ItemId) => void
  ) => {
    if (item.children && item.children.length > 0) {
      return item.isExpanded ? (
        <PreTextIcon onClick={() => onCollapse(item.id)}>
          <Animation lottie={folderOpenedIconLottie}>
            {({container, animation}) => (
              container
            )}
          </Animation>
        </PreTextIcon>
      ) : (
        <PreTextIcon onClick={() => onExpand(item.id)}>
          <Animation lottie={folderClosedIconLottie}>
            {({container, animation}) => (
              container
            )}
          </Animation>
        </PreTextIcon>
      )
    }
    return (
      <PreTextIcon>
        <Animation lottie={documentIconLottie}>
          {({container, animation}) => (
            container
          )}
        </Animation>
      </PreTextIcon>
    )
  }
  
  const renderItem = ({item, onExpand, onCollapse, provided}: RenderItemParams) => {
    return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          ...provided.draggableProps.style,
          top: 'auto !important',
          left: 'auto !important'
        }}>
        <Text>
          {getIcon(item, onExpand, onCollapse)}
          {item.data ? item.data.title : ''}
        </Text>
      </div>
    )
  }

  const onExpand = (itemId: ItemId) => {
    const {tree}: State = this.state
    this.setState({
      tree: mutateTree(tree, itemId, {isExpanded: true})
    })
  }

  const onCollapse = (itemId: ItemId) => {
    const {tree}: State = this.state
    this.setState({
      tree: mutateTree(tree, itemId, {isExpanded: false})
    })
  }

  const onDragEnd = (
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition
  ) => {
    const {tree} = this.state

    if (!destination) {
      return
    }
    const newTree = moveItemOnTree(tree, source, destination)

    this.setState({
      tree: mutateTree(newTree, destination.parentId, {isExpanded: true})
    })
  }

  return (

    <Tree
      tree={tree}
      renderItem={renderItem}
      onExpand={onExpand}
      onCollapse={onCollapse}
      onDragEnd={onDragEnd}
      offsetPerLevel={PADDING_PER_LEVEL}
      isDragEnabled
      isNestingEnabled
    />
  )
}

export default PageTree
