import { Form, HeroTitle } from './style'
import { Container } from '../../global.css'

function Hero() {
  return (
    <Form>
      <Container className="container">
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </Container>
    </Form>
  )
}

export default Hero
