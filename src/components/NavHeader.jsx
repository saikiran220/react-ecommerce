import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { FaBagShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

const NavHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={'/nestle-logo.png'} style={{ height: "30px" }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-center">
          <Nav >
            <ul className='navbar-nav '>
                <li className='nav-item px-4'>
                    <NavLink className='nav-link ' to='/'>Home</NavLink>
                </li>
                <li className='nav-item px-4'>
                    <NavLink className='nav-link' to='/products'>Products</NavLink>
                </li>
                <li className='nav-item px-4'>
                    <NavLink className='nav-link' to='/mobiles'>Mobiles</NavLink>
                </li>
            </ul> 
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav >
            <ul className='navbar-nav '>
            <li>
                <NavLink className='nav-link px-4 ' to='/bag'><FaBagShopping/></NavLink>
                    
            </li>
            <li>
              <NavLink className='nav-link px-4 ' to='/favourate'><MdOutlineFavorite/></NavLink>     
            </li>
            <li>
              <NavLink className='nav-link px-4' to='/user'><FaUserAlt/></NavLink>     
            </li>
            </ul> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavHeader
