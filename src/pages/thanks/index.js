import React from 'react'
import * as S from './styled'


function App(props) {

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Message>Feito!</S.Message>
        <S.Message>Cadastro realizado com sucesso!</S.Message>
      </S.Content>
    </S.HomeContainer>
  )
}

export default App;