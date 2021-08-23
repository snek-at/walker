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

  function nth<T>(iter: Iterable<T>, n: number) {
    for (const v of iter) if (--n < 0) return v
  }

  // const checkItemDepth = (id: string, maxDepth = 3, depth = 0): boolean => {
  //   if (depth >= maxDepth) {
  //     return false
  //   }
  //   const item = items[id]
  //   if (item.parent) {
  //     return checkItemDepth(item.parent, maxDepth, depth + 1)
  //   } else {
  //     return true
  //   }
  // }

  //generator to sqare a value to the power of 2 n times
  function* genItemParent(
    allItems: Items,
    rootItemId: string
  ): Generator<string> {
    let cur = rootItemId

    while (true) {
      const parent = allItems[rootItemId].parent

      if (!parent) {
        break
      }

      cur = parent

      yield cur
    }
  }

  // console.log(!nth(genItemParent(items, items[id]), 1)?.parent)

  // console.log('GENERATOR2', gen.next().value)

  function* genTreeItems(tree: TreeData, items: Items): Generator<TreeItem> {
    for (const [id, item] of Object.entries(items)) {
      if (item.parent === null) {
        tree.items[rootName].children.push(id)
      }
      // yield* genTreeItems(items, depth + 1) else {

      const parentIter = genItemParent(items, id)
      const isExpanded = !nth(parentIter, 0)

      yield {
        ...item,
        id,
        hasChildren: !!item.children.length,
        isExpanded,
        isChildrenLoading: false
      }
    }
  }

  for (const item of genTreeItems(tree, items)) {
    tree.items[item.id] = item
  }

  // export const TreeConverter = (items: Items): TreeData => {
  //   const tree: TreeData = {
  //     rootId: '1',
  //     items: {}
  //   }

  //   tree.items = Array.from(genTreeItems(items)).reduce(
  //     (treeitems: any, item: any, index: number) =>
  //       (treeitems[index.toString()] = item),
  //     {}
  //   )

  //   return tree
  // }

  // const checkItemDepth = (id: string, maxDepth = 3, depth = 0): boolean => {
  //   if (depth >= maxDepth) {
  //     return false
  //   }
  //   const item = items[id]
  //   if (item.parent) {
  //     return checkItemDepth(item.parent, maxDepth, depth + 1)
  //   } else {
  //     return true
  //   }
  // }

  // const rootName = 'SitePage'
  // const tree: TreeData = {
  //   rootId: rootName,
  //   items: {
  //     [rootName]: {
  //       id: rootName,
  //       children: []
  //     }
  //   }
  // }

  // tree.items = {
  //   ...tree.items,
  //   ...Object.fromEntries(
  //     Object.entries(items).map(([id, {parent, ...item}]) => {
  //       if (parent === null) {
  //         tree.items[rootName].children.push(id)
  //       }

  //       return [
  //         id,
  //         {
  //           ...item,
  //           id,
  //           hasChildren: !!item.children.length,
  //           isExpanded: rcheckItemDepth(id),
  //           isChildrenLoading: false
  //         }
  //       ]
  //     })
  //   )
  // }

  return tree
}
