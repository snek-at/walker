import {TreeData, TreeItem} from '@atlaskit/tree'

import type {Items} from './index'

export const TreeConverter = (items: Items): TreeData => {
  const rootName = 'SitePage'
  const tree: TreeData = {
    rootId: rootName,
    items: {
      [rootName]: {
        id: rootName,
        children: []
      }
    }
  }

  tree.items = {
    ...tree.items,
    ...Object.fromEntries(
      Object.entries(items).map(([id, {isRootItem, ...item}]) => {
        if (isRootItem) {
          tree.items[rootName].children.push(id)
        }

        return [
          id,
          {
            ...item,
            id,
            hasChildren: !!item.children.length,
            isChildrenLoading: false
          }
        ]
      })
    )
  }

  return tree
}
