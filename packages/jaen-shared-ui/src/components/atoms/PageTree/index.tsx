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
import {PhoneIcon} from '@chakra-ui/icons'
import {Box, Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import {useState} from 'react'

import {File, FolderClose, FolderOpen} from '../icons'
import {TreeConverter} from './treeconverter'

type State = {
  tree: TreeData
}

export type Items = {
  [id: string]: {
    data: {
      title: string
    }
    children: string[]
  }
}

type PageTreeProps = {
  items: Items
  onItemSelect: (id: string) => void
}

const PageTree: React.FC<PageTreeProps> = ({items, ...props}) => {
  const itemBgColor = useColorModeValue('blue.100', 'blue.400')
  // convert items to a set
  const [tree, setTree] = useState(TreeConverter(items))
  const [selectedItem, selectItem] = useState<string | null>(null)

  const handleItemClick = (id: string) => {
    selectItem(id)
    props.onItemSelect(id)
  }

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
          <FolderOpen />
        </PreTextIcon>
      ) : (
        <PreTextIcon onClick={() => onExpand(item.id)}>
          <FolderClose />
        </PreTextIcon>
      )
    }
    return (
      <PreTextIcon>
        <File />
      </PreTextIcon>
    )
  }

  const renderItem = ({
    item,
    onExpand,
    onCollapse,
    provided
  }: RenderItemParams) => {
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
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={2}
          onClick={() => handleItemClick(item.id as string)}
          _hover={{bg: itemBgColor}}
          bg={selectedItem === item.id ? itemBgColor : ''}>
          {getIcon(item, onExpand, onCollapse)}
          {item.data ? item.data.title : ''}
        </Box>
      </div>
    )
  }

  const onExpand = (itemId: ItemId) => {
    setTree(mutateTree(tree, itemId, {isExpanded: true}))
  }

  const onCollapse = (itemId: ItemId) => {
    setTree(mutateTree(tree, itemId, {isExpanded: false}))
  }

  const onDragEnd = (
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition
  ) => {
    if (!destination) {
      return
    }
    const newTree = moveItemOnTree(tree, source, destination)

    setTree(mutateTree(newTree, destination.parentId, {isExpanded: true}))

    selectItem(destination.parentId as string)
  }

  return (
    <div style={{height: 500, overflow: 'auto'}}>
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
    </div>
  )
}

export default PageTree
