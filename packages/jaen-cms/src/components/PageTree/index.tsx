//@flow
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
import {Text} from '@chakra-ui/react'
import styled from '@emotion/styled'
// import {FaFile} from '@react-icons/all-files/fa/FaFile'
// import {FaFolderMinus} from '@react-icons/all-files/fa/FaFolderMinus'
// import {} from '@react-icons/all-files/fa/FaFolderPlus'
import {Animation, folderOpenedIconLottie, folderClosedIconLottie, documentIconLottie} from '../icons/lottie'
import React, {Component} from 'react'

import {treeWithTwoBranches} from './data'

const PADDING_PER_LEVEL = 16

const PreTextIcon = styled.span`
  display: inline-block;
  width: 16px;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
`

type State = {
  tree: TreeData
}

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

export default class PureTree extends Component<{}, State> {
  state = {
    tree: treeWithTwoBranches
  }

  renderItem = ({item, onExpand, onCollapse, provided}: RenderItemParams) => {
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

  onExpand = (itemId: ItemId) => {
    const {tree}: State = this.state
    this.setState({
      tree: mutateTree(tree, itemId, {isExpanded: true})
    })
  }

  onCollapse = (itemId: ItemId) => {
    const {tree}: State = this.state
    this.setState({
      tree: mutateTree(tree, itemId, {isExpanded: false})
    })
  }

  onDragEnd = (
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

  render() {
    const {tree} = this.state

    return (
      <Tree
        tree={tree}
        renderItem={this.renderItem}
        onExpand={this.onExpand}
        onCollapse={this.onCollapse}
        onDragEnd={this.onDragEnd}
        offsetPerLevel={PADDING_PER_LEVEL}
        isDragEnabled
        isNestingEnabled
      />
    )
  }
}
