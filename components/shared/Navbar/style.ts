import styled from 'styled-components'

import theme from '@/components/_settings/theme'

export const StyledNavbar = styled.nav`
  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1rem 4rem;
  }
`

type ToggleProps = {
  open: boolean
}

export const Toggle = styled.label<ToggleProps>`
  display: flex;
  flex-direction: column;
  width: 30px;
  cursor: pointer;

  position: ${(props) => (props.open ? 'fixed' : 'initial')};
  right: 20px;
  z-index: 1000;

  @media (min-width: 1024px) {
    display: none;
  }
  span {
    background: ${(props) => (props.open ? '#000' : '#fff')};
    border-radius: 50rem;
    height: 3px;
    margin: 2.5px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:nth-of-type(1) {
      width: 50%;
    }
    &:nth-of-type(2) {
      width: 100%;
    }
    &:nth-of-type(3) {
      width: 75%;
    }
  }

  input[type='checkbox'] {
    display: none;
    &:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(3px, -1px);
    }
    &:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }
    &:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(12px, -3px) rotatez(45deg);
    }
  }
`

type MenuMobileProps = {
  open: boolean
}

export const MenuMobile = styled.div<MenuMobileProps>`
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    align-items: center;
    justify-content: center;
    text-align: center;
    ul {
      gap: 1.5rem;
      display: flex;
      flex-direction: column;

      a {
        font-size: ${theme.font.size[6]};
      }
    }

    background: #fff;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const Collapse = styled.div`
  display: none;

  ul {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`
export const NavItem = styled.li``
export const NavLink = styled.a`
  color: #ff8800;
  font: 400 1rem / 1.1 'BoldenVan', sans-serif;
  letter-spacing: 1.5px;
  transition: all 225ms;
  text-transform: uppercase;

  &:hover {
    color: #ff8800;
  }
`
