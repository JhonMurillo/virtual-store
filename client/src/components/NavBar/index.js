import React, { useState } from 'react'
import { Navbar, Link, NavItem } from './styles';
import { Logo } from '../Logo'
import { Alert, Container, Nav, Collapse } from 'reactstrap';
import { Banner } from "../Banner";


export const NavBar = () => {
  const [showBanner, setShowBanner] = useState(false)
  return (
  <>
    <Navbar fixed='top' sticky='top' expand='md'>
    <Container>
      <Logo />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/login">Accede</Link>
          </NavItem>
          <NavItem>
            <Link to="/signup">Registrate</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
    </Navbar>
    <Banner showBanner={showBanner}  message='Mensaje informativo!'/>
  </>
  )
}
