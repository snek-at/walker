import {PageContext, PageContextType} from './context'
import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../../store'
import {count} from '../../store/actions/fooActions'
import {useEffect} from 'react'
import {HStack, Checkbox} from '@chakra-ui/react'

// import {WrapRootElement} from '@chakra-ui/g'

const PageProvider: React.FC<PageContextType> = ({children}) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(count(1))
  }, [])

  const countn = useSelector((state: RootState) => state.foo.count)

  return (
    <PageContext.Provider value={{}}>
      <HStack spacing={10} direction="row">
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultIsChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
          Checkbox
        </Checkbox>
      </HStack>
      {countn}
      {children}
    </PageContext.Provider>
  )
}

export default PageProvider
