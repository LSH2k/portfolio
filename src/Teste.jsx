import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => props.principal ? 'green' : 'blue'};
`

function Teste() {
  return (
    <>
      <Botao>Enviar</Botao>
      <Botao>Cancelar</Botao>
    </>
  )
}

export default Teste
