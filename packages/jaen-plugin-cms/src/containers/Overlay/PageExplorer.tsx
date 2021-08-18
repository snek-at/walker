import {Button} from '@chakra-ui/react'
import * as React from 'react'

import {useAllSitePage} from '../../contexts/cms'
import {useAppDispatch} from '../../store'
import * as actions from '../../store/actions/siteActions'
import {PageType} from '../../types'

const PageExplorer: React.FC<{}> = () => {
  const dispatch = useAppDispatch()
  const allSitePage = useAllSitePage()

  const handleAddPage = () => {
    dispatch(
      actions.addPage({
        pageId: 'SitePage /a/b/c/d',
        page: {
          relations: {
            parent: null,
            children: []
          },
          fields: {},
          pageMetadata: {
            title: 'A new page',
            description: '',
            image: '',
            canonical: '',
            datePublished: '',
            social: {twitter: '', fbAppId: ''},
            isBlogPost: false
          }
        }
      })
    )
  }

  const handlePageMove = () => {
    dispatch(
      actions.movePage({
        pageId: 'SitePage /a/b/c/d',
        parentPageId: 'SitePage /'
      })
    )
  }

  return (
    <>
      {JSON.stringify(allSitePage)}
      <Button onClick={handleAddPage}>{'SitePage /a/b/c/d'}</Button>
      <Button onClick={handlePageMove}>
        {'Move Page (SitePage /a/b/c/d -> SitePage /)'}
      </Button>
    </>
  )
}

export default PageExplorer
