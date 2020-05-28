import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import colors from '../../themes/Colors'

export const PreviewerContainer = styled.div`
   background-color: ${colors.lightBlueGrey40};
   height: 565px;
   ${tw`
        w-full p-2 overflow-auto
    `};
`
