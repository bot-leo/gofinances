import React from "react"

import { Container,
         Header,
         Tittle,
         Icon,
         Footer,
         Amount,
         LastTransaction } from './styles'

interface props{
    type: 'up' | 'down' | 'total',
    title: string;
    amount: string;
    lastTransaction: string;
}

const icon ={
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}


export function HighlightCard({
  type, title, amount, lastTransaction
} : props){
  return(
    <Container type={type}>
      <Header>
        <Tittle type={type}>{title}</Tittle>
        <Icon name={icon[type]} type={type}/>
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}