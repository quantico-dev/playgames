import styled from 'styled-components'

import { Colors } from '.'

type HexProps = {
  [index: string]: {
    color: string
    border: string
    background: string
  }
}

const Hex: HexProps = {
  blue: {
    color: '#fff',
    border: '#2a75b8',
    background: '#3aa0f7',
  },
  orange: {
    color: '#1c428c',
    border: '#ff8800',
    background: '#ffaf10',
  },
  whiteGreen: {
    color: '#649432',
    border: '#649432',
    background: '#fff',
  },
  whiteYellow: {
    color: '#d19a10',
    border: '#d19a10',
    background: '#fff',
  },
  whiteOrange: {
    color: '#d67404',
    border: '#d67404',
    background: '#fff',
  },
}

export const Wrapper = styled.div`
  padding: 0 0 3rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;
`

type ButtonProps = {
  color: Colors
  block?: boolean
}

export const StyledLinkButton = styled.a<ButtonProps>`
  width: ${(props) => (props.block ? '100%' : 'auto')};

  padding: 0.775rem 2rem;

  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  border-radius: 50rem;
  border-bottom: 7px solid ${(props) => Hex[props.color].border};

  background-color: ${(props) => Hex[props.color].background};

  position: absolute;

  color: ${(props) => Hex[props.color].color};
  font-size: 1rem;
  font-family: 'BoldenVan', sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  transition: transform 300ms, border 100ms ease-in-out;

  &:hover {
    transform: translateY(7px);
    border-width: 0px;
  }
`

export const StyledSubmitButton = styled.button<ButtonProps>`
  width: ${(props) => (props.block ? '100%' : 'auto')};

  padding: 0.775rem 2rem;

  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  border-radius: 50rem;
  border-bottom: 7px solid ${(props) => Hex[props.color].border};

  background-color: ${(props) => Hex[props.color].background};

  position: absolute;

  color: ${(props) => Hex[props.color].color};
  font-size: 1rem;
  font-family: 'BoldenVan', sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  transition: transform 300ms, border 100ms ease-in-out;

  &:hover {
    transform: translateY(7px);
    border-width: 0px;
  }
`
