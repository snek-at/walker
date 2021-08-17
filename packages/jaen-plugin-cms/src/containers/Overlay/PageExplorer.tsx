import * as React from 'react'

import {useAllSitePage} from '../../contexts/cms'

const PageExplorer: React.FC<{}> = () => {
  const allSitePage = useAllSitePage()

  return <>{JSON.stringify(allSitePage)}</>
}

export default PageExplorer
