import * as fs from 'fs'
import type {GatsbyNode} from 'gatsby'
import * as path from 'path'

import {PluginOptions} from './types'

export const sourceNodes: GatsbyNode['sourceNodes'] = (
  {actions: {createNode}, createNodeId, createContentDigest},
  pluginOptions: PluginOptions
) => {
  const templatePath = pluginOptions.templatePath || './src/templates'

  // require all files in template folder
  const templateFiles = fs.readdirSync(templatePath)
  const templateNodes: GatsbyNode['nodes'] = []
  templateFiles.forEach(file => {
    const filePath = path.join(templatePath, file)
    const templateNode = {
      id: createNodeId(`${filePath}`),
      parent: null,
      children: [],
      internal: {
        type: 'Template',
        contentDigest: createContentDigest(filePath),
      },
      name: file,
      template: fs.readFileSync(filePath, 'utf8'),
    }
    

  console.log('template path', templateFiles)
  //   return avengers.map(avenger =>
  //     createNode({
  //       ...avenger,
  //       id: createNodeId(avenger.name),
  //       internal: {
  //         type: `Avenger`,
  //         contentDigest: createContentDigest(avenger)
  //       }
  //     })
  //   )
}
