export * from './contexts'
export * as fields from './fields'

export {default as Editor} from './Editor'

export default {
  name: 'jaen-plugin-cms',
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
