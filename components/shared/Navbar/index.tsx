import Brand from '../Brand'
import { Collapse, Nav, NavItem, NavLink, StyledNavbar, Toggle } from './style'

const Navbar = () => (
  <StyledNavbar>
    <Brand />
    <Toggle htmlFor="toggle">
      <input type="checkbox" id="toggle" />
      <span></span>
      <span></span>
      <span></span>
    </Toggle>
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

export default Navbar
