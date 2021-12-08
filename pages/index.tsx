import type { NextPage } from 'next'

import personagens1 from '@/public/images/personagens.png'
import personagens2 from '@/public/images/personagens2.png'
import playingBasketball from '@/public/images/playingBasketball.png'

import About from '@/components/sections/About'
import Attractions from '@/components/sections/Attractions'
import Contact from '@/components/sections/Contact'
import Cover from '@/components/sections/Cover'
import Footer from '@/components/sections/Footer'
import Galery from '@/components/sections/Galery'
import Units from '@/components/sections/Units'

const Home: NextPage = () => {
  return (
    <>
      <Cover />
      <About />
      <Galery
        decorator="red"
        shape="green"
        title="Jogos atuais, diversão garantida e os amigos reunidos."
        text="O parque indoor que traz experiências fora da realidade,
        experimente, valide e volte."
        background="orangeBlue"
        image={personagens1}
        imageAlt=""
      />
      <Attractions />
      <Galery
        decorator="red"
        shape="yellow"
        reverse
        title="Realize o aniversário dos sonhos aqui na play games."
        text="Aqui é o seu novo lugar de diversão, conforto, segurança e muita,
        muita alegria para receber vocês."
        background="blueGreen"
        image={personagens2}
        imageAlt=""
      />
      <Units />
      <Galery
        decorator="yellow"
        shape="orange"
        title="Recarregue o seu Passaporte da Alegria pelo celular ou computador"
        text="Aproveite as ofertas exclusivas do nosso site. Play Games - Diversão
        Além da Imaginação!"
        background="greenBlue"
        image={playingBasketball}
        imageAlt=""
      />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
