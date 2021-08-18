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

  tree.items = Object.fromEntries(
    Object.entries(items).map(([id, item]) => {
      const totalSlashes = id.split('/').length

      if (totalSlashes === 1) {
        tree.items[rootName].children.push(id)
      }

      return [
        item,
        {
          ...item,
          id,
          isExpanded: totalSlashes <= 2,
          hasChildren: !!item.children.length,
          isChildrenLoading: false
        }
      ]
    })
  )

  return tree
}
