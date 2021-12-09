import { useRef, useState } from 'react'

import Brand from '../Brand'
import {
  Collapse,
  MenuMobile,
  Nav,
  NavItem,
  NavLink,
  StyledNavbar,
  Toggle,
} from './style'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const checkboxRef = useRef<HTMLInputElement>(null)

  function Close() {
    checkboxRef.current?.click()
  }
  return (
    <StyledNavbar>
      <Brand />
      <Toggle open={open} htmlFor="toggle">
        <input
          type="checkbox"
          id="toggle"
          ref={checkboxRef}
          onClick={() => setOpen(!open)}
        />
        <span></span>
        <span></span>
        <span></span>
      </Toggle>

      <MenuMobile open={open}>
        <ul>
          <li>
            <NavLink onClick={Close} href="#quem-somos">
              A Play Games
            </NavLink>
          </li>
          <li>
            <NavLink onClick={Close} href="#atracoes">
              Atrações
            </NavLink>
          </li>
          <li>
            <NavLink onClick={Close} href="#unidades">
              Unidades
            </NavLink>
          </li>
          <li>
            <NavLink onClick={Close} href="#contato">
              Contato
            </NavLink>
          </li>
        </ul>
      </MenuMobile>

      <Collapse>
        <Nav>
          <NavItem>
            <NavLink href="#quem-somos">A Play Games</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#atracoes">Atrações</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#unidades">Unidades</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contato">Contato</NavLink>
          </NavItem>
        </Nav>
        {/* <a href="" className="button button-orange">
          Área Player
        </a> */}
      </Collapse>
    </StyledNavbar>
  )
}

export default Navbar
