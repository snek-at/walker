import {useEffect} from 'react'
import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {AppDispatch, RootState} from '../../store'
import {count} from '../../store/actions/fooActions'
import {PageContext, PageContextType} from './context'

// import {WrapRootElement} from '@chakra-ui/g'

const PageProvider: React.FC<PageContextType> = ({children}) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(count(1))
  }, [])

  const countn = useSelector((state: RootState) => state.foo.count)

  return (
    <PageContext.Provider value={{}}>
      {countn}
      {children}
    </PageContext.Provider>
  )
}

export default PageProvider
