import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import colors from '../../themes/Colors'

export const CodeEditorContainer = styled.div`
   width: 565px;
   height: 320px;
   background-color: ${colors.white};
   border-color: ${colors.lightBlueGrey};
   ${tw`
        flex flex-col border border-solid rounded mb-4
    `};
`
