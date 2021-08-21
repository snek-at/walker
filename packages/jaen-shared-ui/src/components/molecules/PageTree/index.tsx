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
import {AddIcon, DeleteIcon, LockIcon, PhoneIcon} from '@chakra-ui/icons'
import {
  Box,
  Text,
  useColorModeValue,
  Badge,
  Flex,
  Spacer,
  HStack
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import {MouseEvent, useState, useMemo} from 'react'

import {ContextMenu} from '../../atoms'
import {File, FolderClose, FolderOpen} from '../../atoms/icons'
import {TreeConverter} from './treeconverter'

export type Items = {
  [id: string]: {
    data: {
      title: string
      locked?: boolean
    }
    isRootItem?: true
    children: string[]
  }
}

type PageTreeProps = {
  items: Items
  height: number | string
  onItemSelect: (id: string | null) => void
}

const PADDING_PER_LEVEL = 16
const PreTextIcon = styled.span`
  display: inline-block;
  width: 16px;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
`

const PageTree: React.FC<PageTreeProps> = ({items, ...props}) => {
  const itemBgColor = useColorModeValue('blue.100', 'blue.400')
  // convert items to a set
  const [tree, setTree] = useState(TreeConverter(items))
  const firstItemId = useMemo(() => Object.keys(items)[0], [items])

  const [selectedItem, selectItem] = useState<string>(firstItemId)

  const [contextMenu, setContextMenu] = useState<{
    id: string | null
    spawnX: number
    spawnY: number
  } | null>(null)

  const renderedContextMenu = (
    <>
      {contextMenu && (
        <Box
          pos="absolute"
          top={contextMenu.spawnY}
          left={contextMenu.spawnX}
          w="3xs">
          <ContextMenu
            items={
              contextMenu.id !== null
                ? [
                    {
                      _type: 'ITEM',
                      content: (
                        <HStack spacing={2}>
                          <AddIcon />
                          <Text>Add page</Text>
                        </HStack>
                      )
                    },
                    {_type: 'DIVIDER'},
                    {
                      _type: 'ITEM',
                      content: (
                        <HStack spacing={2}>
                          <DeleteIcon />
                          <Text>Delete</Text>
                        </HStack>
                      )
                    }
                  ]
                : [
                    {
                      _type: 'ITEM',
                      content: (
                        <HStack spacing={2}>
                          <AddIcon />
                          <Text>Add page</Text>
                        </HStack>
                      )
                    }
                  ]
            }
          />
        </Box>
      )}
    </>
  )

  const handleClick = (event: MouseEvent, id: string | null) => {
    event.stopPropagation()

    const finalId = id || firstItemId
    selectItem(finalId)
    setContextMenu(null)
    props.onItemSelect(finalId)
  }

  const handleContextMenu = (event: MouseEvent, id: string | null) => {
    event.preventDefault()
    event.stopPropagation()

    selectItem(id || firstItemId)
    setContextMenu({id, spawnX: event.clientX, spawnY: event.clientY})
  }

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
    const disableDnD = !!item.data.locked

    const renderedItem = (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={2}
        userSelect="none"
        // @ts-ignore
        onMouseDown={e => {
          disableDnD && e.stopPropagation()
        }}
        onClick={e => handleClick(e, item.id.toString())}
        onContextMenu={e => handleContextMenu(e, item.id.toString())}
        _hover={{bg: itemBgColor}}
        bg={selectedItem === item.id ? itemBgColor : ''}>
        <Flex>
          <Box>
            {getIcon(item, onExpand, onCollapse)}
            {item.data ? item.data.title : ''}
          </Box>
          <Spacer />
          <Box>{disableDnD ? <LockIcon /> : null}</Box>
        </Flex>
      </Box>
    )

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
        {renderedItem}
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
    console.log(source, destination)

    if (!destination || items[destination.parentId]?.data?.locked) {
      return
    }
    const newTree = moveItemOnTree(tree, source, destination)

    setTree(mutateTree(newTree, destination.parentId, {isExpanded: true}))

    selectItem(destination.parentId.toString())
  }

  return (
    <div
      style={{height: props.height, overflow: 'auto'}}
      onClick={e => handleClick(e, null)}
      onContextMenu={e => {
        handleContextMenu(e, null)
      }}>
      {renderedContextMenu}
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
