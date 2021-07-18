import React, {useState} from 'react'
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function App(props) {
  const [email, setEmail] = useState('')
  const history = useHistory()

  function register() {
    localStorage.setItem('registeredEmails', JSON.stringify(email))
    history.push('/thanks') 
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Message>
          Digite seu email abaixo para receber nossas promoções!
        </S.Message>
        <S.InputDiv>
          <S.Input name="email" id="email" className="emailInput" placeholder="Digite aqui seu email" value={email} onChange={e => setEmail(e.target.value)}/>
          <S.Button type="button" onClick={register}>Cadastrar</S.Button>
        </S.InputDiv>
      </S.Content>
    </S.HomeContainer>
  )
}

export default App;