import Image from 'next/image'
import styled from 'styled-components'

import PlayGames from '@/public/images/playgames.png'

const About = () => (
  <Background id="quem-somos">
    <Description>
      <div>
        <h1>A Play Games</h1>
        <h2>
          A melhor casa de jogos do país, atrações imperdíveis e muita diversão
        </h2>
        <p>
          Sua segunda casa, um lugar para você curtir com a galera e aproveitar
          todos os seus créditos nas máquinas de jogos mais iradas do momento.
        </p>
      </div>
      <div>
        <Image src={PlayGames} alt="Espaço Play Games" />
      </div>
    </Description>
    <Data>
      <li>
        <h3>+14</h3>
        <span>Anos de experiência</span>
      </li>
      <li>
        <h3>10</h3>
        <span>Cidades que a Play Games está presente</span>
      </li>
      <li>
        <h3>+7 mil</h3>
        <span>Festas de aniversário realizadas em nossas unidades</span>
      </li>
      <li>
        <h3>14</h3>
        <span>Operações em Shoppings Centers</span>
      </li>
    </Data>
  </Background>
)

const Background = styled.main`
  background: linear-gradient(180deg, #ffad2b 0%, #f27d24 100%);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    padding: 1rem 4rem;
  }
  @media (min-width: 1280px) {
    padding: 1rem 6rem;
  }
`

const Description = styled.div`
  display: flex;
  flex-flow: wrap column-reverse;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-flow: wrap row;
    gap: calc(100% - 44% * 2);
  }

  h1 {
    font: 400 min(calc(1.425rem + 2.1vw), 3rem) / 1.1 'BoldenVan', sans-serif;
    letter-spacing: 1.5px;
  }
  h2 {
    font: 900 min(calc(1.325rem + 0.9vw), 2rem) / 1.1 'Nunito';
  }
  p {
    font-size: min(calc(1.225rem + 0.3vw), 1.5rem);
  }

  & > div {
    width: 100%;
    @media (min-width: 768px) {
      width: 44%;
    }

    &:first-child {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    &:nth-child(2) {
      img {
        max-width: 100%;
      }
    }
  }
`

const Data = styled.div`
  display: flex;
  flex-flow: wrap row;
  gap: 1rem;
  list-style: none;
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 45%;

    @media (min-width: 768px) {
      width: 20%;
    }
  }

  h3 {
    font: 400 min(calc(1.475rem + 2.7vw), 3rem) / 1.1 'BoldenVan', sans-serif;
    letter-spacing: 1.5px;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.1rem;
    font-weight: 700;
  }
`

export default About
