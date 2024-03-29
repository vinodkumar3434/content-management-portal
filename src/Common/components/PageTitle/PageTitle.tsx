import React from 'react'

import { PAGE_TITLE_TEST_ID } from '../../constants/IdConstants'

import { PageTitleContainer, PageTitleEl } from './styledComponents'

interface PageTitleProps {
   title: string | undefined
}

class PageTitle extends React.Component<PageTitleProps> {
   render() {
      const { title } = this.props
      return (
         <PageTitleContainer>
            <PageTitleEl data-testid={PAGE_TITLE_TEST_ID}>{title}</PageTitleEl>
         </PageTitleContainer>
      )
   }
}

export { PageTitle }
