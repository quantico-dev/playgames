import styled from 'styled-components'

import BasketOrange from '@/public/images/basketOrange.png'
import BasketWhite from '@/public/images/basketWhite.png'
import DuckOrange from '@/public/images/duckOrange.png'
import DuckWhite from '@/public/images/duckWhite.png'
import FieldOrange from '@/public/images/fieldOrange.png'
import FieldWhite from '@/public/images/fieldWhite.png'
import GearOrange from '@/public/images/gearOrange.png'
import GearWhite from '@/public/images/gearWhite.png'
import HouseOrange from '@/public/images/houseOrange.png'
import HouseWhite from '@/public/images/houseWhite.png'
import MotorcycleOrange from '@/public/images/motorcycleOrange.png'
import MotorcycleWhite from '@/public/images/motorcycleWhite.png'
import PacmanOrange from '@/public/images/pacmanOrange.png'
import PacmanWhite from '@/public/images/pacmanWhite.png'
import ShipOrange from '@/public/images/shipOrange.png'
import ShipWhite from '@/public/images/shipWhite.png'
import SteeringWheelOrange from '@/public/images/steeringWheelOrange.png'
import SteeringWheelsOrange from '@/public/images/steeringWheelsOrange.png'
import SteeringWheelsWhite from '@/public/images/steeringWheelsWhite.png'
import SteeringWheelWhite from '@/public/images/steeringWheelWhite.png'

import Decoration from '@/components/shared/Decoration'

import Attraction from './Attraction'

const Attractions = () => (
  <Background id="atracoes">
    <Heading>
      <div>
        <Decoration small="green" medium="yellow" />
      </div>
      <h2>Conheça nossas atrações</h2>
      <p>Veja como colocar créditos para brincar na Play Games</p>
    </Heading>

    <Group>
      <Attraction
        imageWhite={GearWhite}
        imageOrange={GearOrange}
        name="Simulador 3D"
      />
      <Attraction
        imageWhite={MotorcycleWhite}
        imageOrange={MotorcycleOrange}
        name="Moto GP"
      />
      <Attraction
        imageWhite={SteeringWheelWhite}
        imageOrange={SteeringWheelOrange}
        name="Race Car"
      />
      <Attraction
        imageWhite={BasketWhite}
        imageOrange={BasketOrange}
        name="Street Basketball"
      />
      <Attraction
        imageWhite={ShipWhite}
        imageOrange={ShipOrange}
        name="Piratas"
      />
      <Attraction
        imageWhite={HouseWhite}
        imageOrange={HouseOrange}
        name="Kid Play"
      />
      <Attraction
        imageWhite={FieldWhite}
        imageOrange={FieldOrange}
        name="Air Game"
      />
      <Attraction
        imageWhite={SteeringWheelsWhite}
        imageOrange={SteeringWheelsOrange}
        name="Duo Drive"
      />
      <Attraction
        imageWhite={PacmanWhite}
        imageOrange={PacmanOrange}
        name="Pac Man"
      />
      <Attraction
        imageWhite={DuckWhite}
        imageOrange={DuckOrange}
        name="Duck Splash"
      />
    </Group>
  </Background>
)

const Background = styled.section`
  background: linear-gradient(180deg, #2f5fdc 0%, #144cdb 100%);
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }

  @media (min-width: 1280px) {
    padding: 0 8rem;
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
  list-style: none;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-flow: wrap row;
    gap: 3%;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    gap: 3%;
  }
`

export default Attractions
