import {TreeData, TreeItem} from '@atlaskit/tree'
import type {Item, ItemWithChildren} from './index'

function* genTreeItem(item: ItemWithChildren){
  yield {
    id: item.id,
    children: item.children.map(genTreeItem(item)),
    hasChildren: item.children.length ? true : false,
    isExpanded: item.children.length ? true : false,
    isChildrenLoading: false,
    data: {
      title: item.id
    }
  }
}

export const TreeConverter = (items: ItemWithChildren[]): TreeData => {
  console.log(items)
  const tree: TreeData = {
    rootId: '1',
    items: {}
  }

  tree.items = items.reduce((acc: any, item, index) => {
    const t = acc[index.toString()] = genTreeItem(item)

    return t
  }, {})


  return tree
}

export const treeWithTwoBranches: TreeData = {
    rootId: '1',
    items: {
      '1': {
        id: '1',
        children: ['1-1', '1-2'],
        hasChildren: true,
        isExpanded: true,
        isChildrenLoading: false,
        data: {
          title: 'root'
        }
      },
      '1-1': {
        id: '1-1',
        children: ['1-1-1', '1-1-2'],
        hasChildren: true,
        isExpanded: true,
        isChildrenLoading: false,
        data: {
          title: 'First parent'
        }
      },
      '1-2': {
        id: '1-2',
        children: ['1-2-1', '1-2-2'],
        hasChildren: true,
        isExpanded: true,
        isChildrenLoading: false,
        data: {
          title: 'Second parent'
        }
      },
      '1-1-1': {
        id: '1-1-1',
        children: [],
        hasChildren: false,
        isExpanded: false,
        isChildrenLoading: false,
        data: {
          title: 'Child one'
        }
      },
      '1-1-2': {
        id: '1-1-2',
        children: [],
        hasChildren: false,
        isExpanded: false,
        isChildrenLoading: false,
        data: {
          title: 'Child two'
        }
      },
      '1-2-1': {
        id: '1-2-1',
        children: [],
        hasChildren: false,
        isExpanded: false,
        isChildrenLoading: false,
        data: {
          title: 'Child three'
        }
      },
      '1-2-2': {
        id: '1-2-2',
        children: [],
        hasChildren: false,
        isExpanded: false,
        isChildrenLoading: false,
        data: {
          title: 'Child four'
        }
      }
    }
  }