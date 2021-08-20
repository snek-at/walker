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
        name: 'My Fance Page',
        page: {
          relations: {
            parent: 'SitePage /404/',
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
        pageId: 'SitePage /404/my-fance-page/',
        parentPageId: 'SitePage /dev-404-page/'
      })
    )
  }

  const pages = allSitePage.nodes

  return (
    <>
      {/* {JSON.stringify(pages)} */}
      {Object.entries(pages).map(([id, page], key) => (
        <li key={key}>
          <b>{id}</b>
          {JSON.stringify(page)}
        </li>
      ))}

      <Button onClick={handleAddPage}>{'SitePage /a/b/c/d'}</Button>
      <Button onClick={handlePageMove}>
        {'Move Page (SitePage /a/b/c/d -> SitePage /)'}
      </Button>
    </>
  )
}

export default PageExplorer
