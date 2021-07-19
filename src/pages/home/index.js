import React, {useState} from 'react'
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function App(props) {
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState(false)
  const history = useHistory()

  function register() {
    const emailCheck = email.indexOf("@")
    if (emailCheck === -1) {
      setErro(true)
    }else {
      localStorage.setItem('registeredEmails', JSON.stringify(email))
      history.push('/thanks')
      setErro(false)
    } 
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
          {erro ? <S.ErrorMsg>Ops! O formato do emaail digitado não é valido!</S.ErrorMsg> : '' }
        </S.InputDiv>
      </S.Content>
    </S.HomeContainer>
  )
}

export default App;