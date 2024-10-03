import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto</Titulo>
    <Paragrafo tipo="secundario">Descrição do projeto</Paragrafo>
    <LinkBotao href="#">Visualizar</LinkBotao>
  </Card>
)

export default Projeto
