import React from 'react'
import { observer } from 'mobx-react'

import { ContentEditor } from '../../../Common/components/ContentEditor'
import { Button } from '../../../Common/components/Button'
import colors from '../../../Common/themes/Colors'
import commonI18n from '../../../Common/i18n/strings.json'

import i18n from '../../i18n/strings.json'
import { TEST_CASES_CHECKBOX_TEST_ID } from '../../constants/IdConstants'

import {
   TestCasesContentContainer,
   LabelAndEditorContainer,
   TextLabel,
   ScoreInputField,
   CheckboxContainer,
   Checkbox,
   CheckboxLabel,
   SaveButtonContainer,
   ErrorMessage
} from './styledComponents'

interface TestCasesContentSectionProps {
   uniqueId: string
   input: string
   onChangeInput: any
   output: string
   onChangeOutput: any
   score: number
   onChangeScore: any
   isHidden: boolean
   onToggleIsHidden: any
   onClickSaveButton: any
   inputErrorMessage: string | null
   outputErrorMessage: string | null
   scoreErrorMessage: string | null
}

@observer
class TestCasesContentSection extends React.Component<
   TestCasesContentSectionProps
> {
   onChangeInput = updatedInput => {
      const { onChangeInput, uniqueId } = this.props
      onChangeInput(updatedInput, uniqueId)
   }

   onChangeOutput = updatedOutput => {
      const { onChangeOutput, uniqueId } = this.props
      onChangeOutput(updatedOutput, uniqueId)
   }

   render() {
      const {
         uniqueId,
         input,
         output,
         score,
         onChangeScore,
         isHidden,
         onToggleIsHidden,
         onClickSaveButton,
         inputErrorMessage,
         outputErrorMessage,
         scoreErrorMessage
      } = this.props
      const { testCases } = i18n
      const { commonComponents } = commonI18n
      return (
         <TestCasesContentContainer>
            <LabelAndEditorContainer>
               <TextLabel>{testCases.input}</TextLabel>
               <ContentEditor
                  content={input}
                  contentType={testCases.contentType}
                  onChangeContent={this.onChangeInput}
               />
               {inputErrorMessage && (
                  <ErrorMessage>{inputErrorMessage}</ErrorMessage>
               )}
            </LabelAndEditorContainer>
            <LabelAndEditorContainer>
               <TextLabel>{testCases.output}</TextLabel>
               <ContentEditor
                  content={output}
                  contentType={testCases.contentType}
                  onChangeContent={this.onChangeOutput}
               />
               {outputErrorMessage && (
                  <ErrorMessage>{outputErrorMessage}</ErrorMessage>
               )}
            </LabelAndEditorContainer>
            <TextLabel>{testCases.score}</TextLabel>
            <ScoreInputField
               type={testCases.contentType}
               value={score}
               onChange={event => onChangeScore(event, uniqueId)}
            />
            {scoreErrorMessage && (
               <ErrorMessage>{scoreErrorMessage}</ErrorMessage>
            )}
            <CheckboxContainer>
               <Checkbox
                  data-testid={TEST_CASES_CHECKBOX_TEST_ID}
                  type={testCases.checkboxType}
                  checked={isHidden}
                  onChange={event => onToggleIsHidden(event, uniqueId)}
               />
               <CheckboxLabel>{testCases.isHidden}</CheckboxLabel>
            </CheckboxContainer>
            <SaveButtonContainer>
               <Button
                  onClickButton={() => onClickSaveButton(uniqueId)}
                  backgroundColor={colors.brightBlue}
                  textColor={colors.white}
                  buttonText={commonComponents.save}
               />
            </SaveButtonContainer>
         </TestCasesContentContainer>
      )
   }
}

export { TestCasesContentSection }
