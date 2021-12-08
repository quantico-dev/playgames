import Image from 'next/image'
import styled from 'styled-components'

import aguasClaras from '@/public/images/aguasClaras.png'
import dfPlaza from '@/public/images/dfPlaza.png'
import pin from '@/public/images/pin.png'

import { LinkButton } from '@/components/shared/Button'
import Decoration from '@/components/shared/Decoration'

const Units = () => (
  <Background id="unidades">
    <Heading>
      <Decoration small="blue" medium="yellow" />
      <h2>Funcionamento e Unidades</h2>
    </Heading>

    <Group>
      <Item>
        <Icon>
          <Image src={pin} alt="" />
        </Icon>
        <header>
          <Image
            src={dfPlaza}
            layout="fill"
            objectFit="cover"
            objectPosition="center 0"
            alt="Unidade DF Plaza"
          />
        </header>
        <div className="unit-body">
          <h3>DF Plaza Shopping</h3>
          <LinkButton
            color="blue"
            target="_blank"
            href="https://www.google.com.br/maps/place/Play+Games+-+DF+Plaza/@-15.8606567,-48.0294407,17z/data=!3m1!4b1!4m5!3m4!1s0x935a2d78a07e0bc1:0x170c6aaa387340e3!8m2!3d-15.8606567!4d-48.027252"
          >
            Como Chegar
          </LinkButton>
        </div>
      </Item>
      <Item>
        <Icon>
          <Image src={pin} alt="" />
        </Icon>
        <header>
          <Image
            src={aguasClaras}
            layout="fill"
            objectFit="cover"
            objectPosition="center 0"
            alt="Unidade Águas Claras"
          />
        </header>
        <div className="unit-body">
          <h3>Águas Claras Shopping</h3>
          <LinkButton
            color="blue"
            target="_blank"
            href="https://www.google.com.br/maps/place/Play+Games+%C3%81guas+Claras+Shopping/@-15.842511,-48.0276542,17z/data=!3m1!4b1!4m5!3m4!1s0x935a335a0ea0ddf5:0xcfa4621d18bdd82a!8m2!3d-15.8425043!4d-48.0254489"
          >
            Como Chegar
          </LinkButton>
        </div>
      </Item>
      <Item>
        <Icon>
          <Image src={pin} alt="" />
        </Icon>
        <div className="unit-body">
          <h3>Horário de funcionamento:</h3>
          <p>Funcionando de domingo a domingo das 10h às 22h.</p>
        </div>
      </Item>
    </Group>
  </Background>
)

const Background = styled.section`
  background: #7cb83c;
  border: 3px solid #7cb83c;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0rem 2rem 4rem;

  @media (min-width: 768px) {
    padding: 0rem 4rem 4rem;
  }
  @media (min-width: 1280px) {
    padding: 0rem 6rem 4rem;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  h2 {
    font: 400 min(calc(1.425rem + 2.1vw), 3rem) / 1.1 'BoldenVan', sans-serif;
    letter-spacing: 1.5px;
  }
  p {
    font-weight: 700;
  }
`

const Group = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  list-style: none;

  li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-flow: row wrap;
    gap: 10%;
    li:last-child {
      width: 100%;

      div:first-child {
        top: -90px;
        img {
          transform: scale(0.6);
        }
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 5%;
    li:last-child div:first-child img {
      transform: scale(1);
    }
  }

  @media (min-width: 1280px) {
    gap: 4%;
    li:last-child {
      width: calc(90% / 3);

      div:first-child img {
        transform: scale(1);
      }
    }
  }
`

const Item = styled.li`
  position: relative;
  width: 100%;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 10px 46px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  @media (min-width: 768px) {
    width: calc(90% / 2);
    margin: 1rem 0;
  }
  @media (min-width: 1024px) {
    width: calc(95% / 2);
    margin: 2rem 0;
  }
  @media (min-width: 1024px) {
    width: calc(90% / 3);
  }

  header {
    position: relative;
    height: 240px;
    border-radius: 12px 12px 0px 0px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    @media (min-width: 1024px) {
      padding: 3rem 7rem;
    }
    @media (min-width: 1280px) {
      padding: 3rem;
    }

    h3 {
      font: 400 min(calc(1.325rem + 0.9vw), 2rem) / 1.1 'BoldenVan', sans-serif;
      color: #3aa0f8;
    }
    p {
      font: 700 min(calc(1.225rem + 0.3vw), 1.5rem) / 1.1 'Nunito', sans-serif;
      color: #4e5a70;
    }
  }
`

const Icon = styled.div`
  position: absolute;
  top: -70px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  @media (min-width: 1024px) {
    top: -90px;
  }

  img {
    transform: scale(0.9);

    @media (min-width: 768px) {
      transform: scale(1);
    }
  }
`

export default Units
