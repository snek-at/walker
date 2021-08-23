import {HotbarMainProps, TabsMainProps} from '@snek-at/jaen-shared-ui'

export type PluginUI = {
  hotbar: HotbarMainProps
  tabs: TabsMainProps
}

export type PluginCallbacks = {
  onPublish: () => object
}

export type Plugin = {
  name: string
  registerUI: PluginUI
  registerCallbacks: PluginCallbacks
}

/**
 * @param {Plugin[]} plugins
 *
 * @return {PluginUI}
 *
 * Merges the plugin UI objects into a single object.
 */
export const getUI = (plugins: Plugin[]): PluginUI => {
  const ui: PluginUI = {
    hotbar: {start: [], end: []},
    tabs: {start: [], end: []}
  }

  plugins.forEach(plugin => {
    const {hotbar, tabs} = plugin.registerUI

    ui.hotbar.start = [...ui.hotbar.start, ...hotbar.start]
    ui.hotbar.end = [...ui.hotbar.end, ...hotbar.end]
    ui.tabs.start = [...ui.tabs.start, ...tabs.start]
    ui.tabs.end = [...ui.tabs.end, ...tabs.end]
  })

  return ui
}

/**
 * @param {Plugin[]} plugins
 *
 * Gathers all individual plugin publish objects and merges them into a single object
 */
export const getPublishValue = (plugins: Plugin[]): object => {
  const o: {[key: string]: any} = {}
  plugins.forEach(({name, registerCallbacks}) => {
    const {onPublish} = registerCallbacks
    o[name] = onPublish()
  })
  return o
}
