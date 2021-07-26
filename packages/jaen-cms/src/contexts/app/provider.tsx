import * as React from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react'

import Overlay from '../../core'
import {store, persistor} from '../../store'
import {AppContext, AppContextType} from './context'

export const AppProvider: React.FC<AppContextType> = ({children, ...props}) => {
  return (
    <AppContext.Provider value={{templates: props.templates}}>
      <Overlay />
      {children}
    </AppContext.Provider>
  )
}

const WrappedAppProvider: React.FC<AppContextType> = props => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => <AppProvider {...props} />}
      </PersistGate>
    </ReduxProvider>
  )
}

export default WrappedAppProvider
