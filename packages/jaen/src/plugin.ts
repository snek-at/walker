export type PluginUI = {
  hotbar: {
    buttons: {
      position: number
      orientation: 'start' | 'end'
      button: JSX.Element
    }[]
  }
  tabs: {
    position: number
    orientation: 'start' | 'end'
    tab: JSX.Element
  }[]
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
  const ui: PluginUI = {hotbar: {buttons: []}, tabs: []}
  plugins.forEach(plugin => {
    const {hotbar, tabs} = plugin.registerUI

    ui.hotbar.buttons = ui.hotbar.buttons.concat(hotbar.buttons)
    ui.tabs = ui.tabs.concat(tabs)
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
