import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import colors from '../../themes/Colors'

export const TextPreviewerContainer = styled.div`
   background-color: ${colors.lightBlueGrey40};
   ${tw`
        w-full p-2 overflow-auto
    `}
`

export const PreTag = styled.pre`
   ${tw`
        w-full h-full
    `}
`
