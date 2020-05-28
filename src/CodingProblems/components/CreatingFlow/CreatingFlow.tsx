import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import commonI18n from '../../../common/i18n/strings.json'
import { AppHeader } from '../../../common/components/AppHeader'
import { BackButton } from '../../../common/components/BackButton'
import { PageTitle } from '../../../common/components/PageTitle'

import {
   STATEMENT,
   ROUGH_SOLUTION,
   TEST_CASES,
   PREFILLED_CODE,
   CLEAN_SOLUTION,
   HINTS,
   SOLUTION_APPROACH
} from '../../constants/TabConstants'

import { Navigator } from '../Navigator'
import { Statement } from '../Statement'
import { RoughSolution } from '../RoughSolution'
import { TestCases } from '../TestCases'
import { SolutionApproach } from '../SolutionApproach'
import { CleanSolution } from '../CleanSolution'
import { Hints } from '../Hints'

import {
   AppContainer,
   ContentContainer,
   SectionWrapper,
   Wrapper
} from './styledComponents'

type CreatingFlowProps = {
   codingProblemsStore: any
}

@observer
class CreatingFlow extends React.Component<CreatingFlowProps> {
   @observable selectedTabIndex: number = 1
   @observable tabDetails = [
      {
         tabIndex: 1,
         tabName: STATEMENT,
         isSelected: true
      },
      {
         tabIndex: 2,
         tabName: ROUGH_SOLUTION,
         isSelected: false
      },
      {
         tabIndex: 3,
         tabName: TEST_CASES,
         isSelected: false
      },
      {
         tabIndex: 4,
         tabName: PREFILLED_CODE,
         isSelected: false
      },
      {
         tabIndex: 5,
         tabName: SOLUTION_APPROACH,
         isSelected: false
      },
      {
         tabIndex: 6,
         tabName: CLEAN_SOLUTION,
         isSelected: false
      },
      {
         tabIndex: 7,
         tabName: HINTS,
         isSelected: false
      }
   ]

   goToCodingProblemsHome = () => {}

   onSelectTab = (tabIndex: number) => {
      this.selectedTabIndex = tabIndex
      this.tabDetails.forEach((tab, index) => {
         if (tab.tabIndex === tabIndex) {
            this.tabDetails[index].isSelected = true
         } else {
            this.tabDetails[index].isSelected = false
         }
      })
   }

   renderRespectiveTabComponent = () => {
      const { codingProblemsStore } = this.props
      switch (this.selectedTabIndex) {
         case 1:
            return (
               <Statement
                  codingProblemsStore={codingProblemsStore}
                  onSelectTab={this.onSelectTab}
                  currentTabIndex={this.selectedTabIndex}
               />
            )
         case 2:
            return (
               <Wrapper>
                  <SectionWrapper>
                     <RoughSolution
                        key={ROUGH_SOLUTION}
                        codingProblemsStore={codingProblemsStore}
                        onSelectTab={this.onSelectTab}
                        currentTabIndex={this.selectedTabIndex}
                     />
                  </SectionWrapper>
               </Wrapper>
            )
         case 3:
            return (
               <Wrapper>
                  <SectionWrapper>
                     <TestCases content='#include <stdio.h>' />
                  </SectionWrapper>
               </Wrapper>
            )
         case 4:
            return (
               <Wrapper>
                  <SectionWrapper>
                     <RoughSolution
                        key={PREFILLED_CODE}
                        codingProblemsStore={codingProblemsStore}
                        onSelectTab={this.onSelectTab}
                        currentTabIndex={this.selectedTabIndex}
                     />
                  </SectionWrapper>
               </Wrapper>
            )
         case 5:
            return <SolutionApproach content='' contentType='text' />
         case 6:
            return (
               <Wrapper>
                  <SectionWrapper>
                     <CleanSolution content='' contentType='javascript' />
                  </SectionWrapper>
               </Wrapper>
            )
         case 7:
            return (
               <Wrapper>
                  <SectionWrapper>
                     <Hints />
                  </SectionWrapper>
               </Wrapper>
            )
      }
   }

   getCapitalizedActiveTab = () => {
      const selectedTab = this.tabDetails.find(tab => tab.isSelected)
      let words = selectedTab?.tabName.split('_')
      return words
         ?.map(word => {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            return word
         })
         .join(' ')
   }

   render() {
      const { commonLabels } = commonI18n
      const activeTab = this.getCapitalizedActiveTab()
      return (
         <AppContainer>
            <AppHeader
               username='Chi Lee'
               userProfilePicLink='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/696fd949-70d2-4be4-b1ef-a5065b1b1a11@3x.png'
            />
            <ContentContainer>
               <BackButton
                  buttonText={commonLabels.backToList}
                  onClickBackButton={this.goToCodingProblemsHome}
               />
               <PageTitle title={activeTab} />
               <Navigator
                  tabDetails={this.tabDetails}
                  onSelectTab={this.onSelectTab}
               />
               {this.renderRespectiveTabComponent()}
            </ContentContainer>
         </AppContainer>
      )
   }
}

export { CreatingFlow }
