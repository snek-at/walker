export * from './contexts'
export * as fields from './containers/fields'
export * as blocks from './containers/blocks'

export {default as Editor} from './containers/Editor'

export default {
  name: 'jaen-cms',
  registerUI: {
    hotbar: {
      buttons: []
    },
    tabs: []
  },
  registerCallbacks: {
    onPublish: () => ({editedPage: {1: 1}})
  }
}
