import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1rem 4rem;
  }
`

export const Toggle = styled.label`
  display: flex;
  flex-direction: column;
  width: 30px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
  span {
    background: #fff;
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

export const Collapse = styled.div`
  display: none;
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
