import styled from 'styled-components'

export const HomeContainer = styled.div`
  background: rgb(90,233,35);
  background: linear-gradient(90deg, rgba(90,233,35,1) 0%, rgba(236,166,28,1) 35%, rgba(224,0,255,1) 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  align-items: center;
  justify-content: center;
`

export const InputDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15rem 0;
`

export const Input = styled.input `
  border: 1px solid blueviolet;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none
  }
`

export const Message = styled.span`
  font-family: Anton;
  margin: 0 5rem;
  text-align: left;
  font-size: 50px;
  color: #fff;
`