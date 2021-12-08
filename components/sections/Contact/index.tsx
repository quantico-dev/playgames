import { LinkButton, SubmitButton } from '@/components/shared/Button'
import Decoration from '@/components/shared/Decoration'
import Input from '@/components/shared/Input'

import { Background, Checkbox, Form, Heading } from './style'

const Contact = () => (
  <Background id="contato">
    <Heading>
      <div>
        <Decoration small="green" medium="yellow" />
      </div>
      <h2>
        Cadastre-se e ganhe <br />
        <span>5% de desconto</span> na reserva de festa pelo site
      </h2>
    </Heading>
    <Form>
      <Input type="text" placeholder="Seu Nome" />
      <Input type="text" placeholder="Seu E-mail" />
      <Input type="text" placeholder="Telefone (Opcional)" />
      <Checkbox>
        <input type="checkbox" name="" id="promo" />
        <label htmlFor="promo">
          Gostaria de receber ofertas de festas e diversão da Play Games Águas
          Claras
        </label>
      </Checkbox>
      <SubmitButton color="orange" block>
        Cadastre-se
      </SubmitButton>
    </Form>
  </Background>
)

export default Contact
