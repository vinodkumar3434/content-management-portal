import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import commonColors from '../../../common/themes/Colors'

import colors from '../../themes/Colors'

export const SignInPageWrapper = styled.div`
   ${tw`
        w-screen h-screen bg-blue-100 flex justify-center items-center
    `}
`

export const SignInContainer = styled.div`
   width: 500px;
   ${tw`
        flex flex-col text-center bg-white px-20 py-2 rounded
    `}
`

export const SignInLogo = styled.img`
   ${tw`
        w-24 h-24 mx-auto mt-4
    `}
`

export const SignInTitle = styled.h1`
   color: ${commonColors.darkBlueGrey};
   ${tw`
        text-2xl my-4
    `}
`

export const FieldWrapper = styled.div`
   ${tw`
        flex flex-col mt-4 items-start
    `}
`

export const TextLabel = styled.span`
   color: ${commonColors.steel};
   ${tw`
        text-xs
    `};
`

export const ErrorMessage = styled.span`
   color: ${colors.neonRed};
   ${tw`
        text-xs
    `}
`

export const SignInButton = styled.button`
   background-color: ${commonColors.brightBlue};
   ${tw`
        text-white font-bold py-3 mt-8 mb-4 rounded text-sm
    `};
`

export const SignUpMessage = styled.p`
   ${tw`
        mt-2 mb-20 text-sm
    `}
`

export const SignUpLink = styled.a`
   ${tw`
        text-blue-600
    `}
`