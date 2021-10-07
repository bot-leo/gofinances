import React from 'react'
import {TextInputProps} from 'react-native'

import {Container} from './styles'


//Tipando o componente de textInput com as propriedades padroes do n
type Props = TextInputProps

export function Input( {...rest} : Props ){
  return(
    <Container {...rest}/>
  )
}