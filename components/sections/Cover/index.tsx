import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

import HeadingImage from '@/public/images/home-heading.png'

import { LinkButton } from '@/components/shared/Button'
import Navbar from '@/components/shared/Navbar'

const Cover = () => (
  <Background>
    <Navbar />

    <Heading>
      <Image
        src={HeadingImage}
        alt="A Casa de Games mais eletrizante do Brasil"
        priority
      />
    </Heading>

    <ButtonGroup>
      <div>
        <LinkButton href="" color="orange">
          <span>Aperte o Play</span>
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 23.4809V2.95329C0 1.45712 1.58266 0.490696 2.91361 1.17416L23.4412 11.7154C24.9074 12.4683 24.8846 14.5719 23.4025 15.293L2.87493 25.2794C1.54651 25.9256 0 24.9582 0 23.4809Z"
              fill="#1C428C"
            />
          </svg>
        </LinkButton>
      </div>

      <IndicatorButton href="#quem-somos">
        <div>
          <svg
            width="10"
            height="13"
            viewBox="0 0 10 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 13L0 0H10L5 13Z" fill="black" />
          </svg>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </IndicatorButton>
    </ButtonGroup>
  </Background>
)

const Background = styled.header`
  position: relative;
  height: auto;
  background: no-repeat center bottom / cover url('/images/home-cover.jpg');
`

const Heading = styled.header`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`

const ButtonGroup = styled.div`
  padding: 4rem 0;
`

const Blink = keyframes`
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 20%;
  }
  100% {
    opacity: 100%;
  }
`

const IndicatorButton = styled.a`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;

  @media (min-width: 1024px) {
    margin-top: 3rem;
  }

  & > div {
    background-color: #fff;
    padding: 1.3rem 1.4rem 1rem;
    border-radius: 50rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  & > span {
    background-color: #fff;
    border-radius: 50rem;
    &:nth-child(2) {
      width: 16px;
      height: 16px;
      animation: ${Blink} 1.3s ease-in 1s infinite;
    }
    &:nth-child(3) {
      width: 12px;
      height: 12px;
      animation: ${Blink} 1.3s ease-in 1.2s infinite;
    }
    &:nth-child(4) {
      width: 9px;
      height: 9px;
      animation: ${Blink} 1.3s ease-in 1.4s infinite;
    }
    &:nth-child(5) {
      width: 6px;
      height: 6px;
      animation: ${Blink} 1.3s ease-in 1.6s infinite;
    }
  }
`

export default Cover
