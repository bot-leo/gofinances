import styled, {css} from "styled-components/native"
import {RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'


interface typeProps{
  type: 'up' | 'down' | 'total',
}

export const Container = styled.View<typeProps>`
 background-color: ${({theme, type}) => 
 type === 'total' ? theme.colors.secondary : theme.colors.shape};

 width: ${RFValue(300)}px;

 border-radius: 5px;

 padding: 19px 23px;
 padding-bottom: ${RFValue(42)}px;

 margin-left: 16px;
`



export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

`

export const Tittle = styled.Text<typeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) => 
   type === 'total' ? theme.colors.shape : theme.colors.text_dark};

  font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)<typeProps>`
  font-size: ${RFValue(40)}px;


  ${({type}) => type === 'up' && css`
    color: ${({theme}) => theme.colors.sucess};
  `}

  ${({type}) => type === 'down' && css`
    color: ${({theme}) => theme.colors.attention};
  `}

  ${({type}) => type === 'total' && css`
    color: ${({theme}) => theme.colors.shape};
  `}
`

export const Footer = styled.View``

export const Amount = styled.Text<typeProps>`
  font-family: ${({theme}) => theme.fonts.medium};

  font-size: ${RFValue(32)}px;

  color: ${({theme, type}) => 
   type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`

export const LastTransaction = styled.Text<typeProps>`
font-size: ${RFValue(12)}px;

font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme, type}) => 
   type === 'total' ? theme.colors.shape : theme.colors.text};
`