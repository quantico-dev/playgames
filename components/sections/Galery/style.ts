import styled from 'styled-components'

export type Colors = 'orangeBlue' | 'blueGreen' | 'greenBlue'
export type ShapeColors = 'green' | 'yellow' | 'orange'

type BackgroundProps = {
  reverse: boolean
  color: Colors
}

type ContentWrapperProps = {
  color: 'green' | 'yellow' | 'orange'
}

type ShapeHexProps = {
  [index: string]: string
}

const ShapeHex: ShapeHexProps = {
  green: '#83c341',
  yellow: '#ebb425',
  orange: '#ff8800',
}

type HexProps = {
  [index: string]: {
    color1: string
    color2: string
  }
}

const Hex: HexProps = {
  orangeBlue: {
    color1: '#f27d24',
    color2: '#2f5fdc',
  },

  blueGreen: {
    color1: '#144cdb',
    color2: '#7cb83c',
  },

  greenBlue: {
    color1: '#7cb83c',
    color2: '#144cdb',
  },
}

export const Background = styled.section<BackgroundProps>`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${(props) => Hex[props.color].color1} 50%,
    ${(props) => Hex[props.color].color2} 50%
  );
  position: relative;
  overflow-x: hidden;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
`
export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 120%;
  padding: 10rem 4rem 0rem;
  gap: 1rem;
  display: flex;
  position: relative;
  z-index: 0;

  @media (min-width: 768px) {
    width: 47%;
    padding: 0rem 2rem;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    width: 44%;
    padding: 2rem;
  }

  @media (min-width: 1280px) {
    width: 47%;
    padding: 4rem;
  }

  @media (min-width: 1366px) {
    width: 47%;
    padding: 6rem;
  }

  & > div {
    position: relative;
    z-index: 3;
    &:nth-child(1) {
      padding-top: 0.3rem;
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
  }
  &::before {
    background: ${(props) => ShapeHex[props.color]};
    top: -80px;
    bottom: 100px;
  }
  &::after {
    background: ${(props) => ShapeHex[props.color]};
    top: 0px;
    bottom: -80px;
  }
`

export const ContentWrapperLeft = styled(ContentWrapper)`
  &::before {
    left: 0;
    right: -5.5px;
    transform: skew(8deg, 5deg);
  }
  &::after {
    left: 0;
    right: -20px;
    transform: skew(8.5deg, -3deg);
  }
`

export const ContentWrapperRight = styled(ContentWrapper)`
  &::before {
    right: 0;
    left: -5.5px;
    transform: skew(-8deg, -5deg);
  }
  &::after {
    right: 0;
    left: -20px;
    transform: skew(-8.5deg, 3deg);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Title = styled.h2`
  font: 400 min(calc(1.325rem + 0.9vw), 2rem) / 1.1 'BoldenVan', sans-serif;
  letter-spacing: 1.5px;
`

export const Text = styled.p`
  font-weight: 700;
`

export const Carousel = styled.div`
  position: absolute;
  z-index: 0;
  top: 5px;

  min-width: 105%;

  @media (min-width: 768px) {
    top: auto;
    min-width: 60%;
  }
  @media (min-width: 1280px) {
    min-width: 55%;
  }

  img {
    width: 100%;
  }
`

export const CarouselLeft = styled(Carousel)`
  left: 0;
`
export const CarouselRight = styled(Carousel)`
  right: 0;
`
