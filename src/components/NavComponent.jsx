import React, { useState } from 'react'
import { FaHome, FaUserAlt, FaImages, FaBriefcase, FaQuestion } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BarIcon, CloseIcon, LogoName, Nav, Navbar, NavItem, Navlink, NavMenu } from './NavStyle';

export default function NavComponent() {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(prev => !prev)
  return (
    <Nav>
        <Navbar>
            <LogoName>Logo</LogoName>
            <BarIcon onClick={toggleShow}/>
            <NavMenu show={show}>
                <CloseIcon onClick={toggleShow}/>
                <NavItem>
                    <Navlink to={'/'} onClick={toggleShow}>
                        <FaHome/> Home
                    </Navlink>
                </NavItem>
                <NavItem>
                    <Navlink to={'/gallery'} onClick={toggleShow}>
                        <FaImages/> Gallery
                    </Navlink>
                </NavItem>
                <NavItem>
                    <Navlink to={'/services'} onClick={toggleShow}>
                        <FaBriefcase/> Services
                    </Navlink>
                </NavItem>
                <NavItem>
                    <Navlink to={'/about'} onClick={toggleShow}>
                        <FaUserAlt/> About
                    </Navlink>
                </NavItem>
                <NavItem>
                    <Navlink to={'/help'} onClick={toggleShow}>
                        <FaQuestion/> Help
                    </Navlink>
                </NavItem>
                <NavItem>
                    <Navlink to={'/setting'} onClick={toggleShow}>
                        <AiFillSetting/> Setting
                    </Navlink>
                </NavItem>
            </NavMenu>
        </Navbar>
    </Nav>
  )
}