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
        page: {
          slug: 'sample-page-01',
          template: 'HomePage',
          parent: null,
          children: [],
          fields: {},
          pageMetadata: {
            title: 'Sample Page 01',
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
        pageId: '3ccea236-af82-4c3c-946c-669ec9d7e61a',
        parentPageId: 'aaeb0e8c-2ee7-4c71-84f2-606bfdf5106d'
      })
    )
  }

  const pages = allSitePage.nodes

  console.log('start rendering')

  return (
    <>
      {JSON.stringify(Object.keys(pages).length)}

      {Object.entries(pages).map(([id, page], key) => (
        <div key={key}>
          <b>{id}: </b>
          {JSON.stringify(page)}
        </div>
      ))}

      <Button onClick={handleAddPage}>{'SitePage /a/b/c/d'}</Button>
      <Button onClick={handlePageMove}>
        {'Move Page (SitePage /a/b/c/d -> SitePage /)'}
      </Button>
    </>
  )
}

export default PageExplorer
