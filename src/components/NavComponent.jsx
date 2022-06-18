import React, { useState } from 'react'
import styled from 'styled-components'
import { FaHome, FaUserAlt, FaImages, FaBriefcase, FaQuestion, FaTimes } from "react-icons/fa";
import { AiFillSetting, AiOutlineAppstore } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsl(250, 100%, 15%);
    z-index: 1;
    @media (min-width: 800px){
        bottom: initial;
        top: 0;
    }
`
const Navbar = styled.div`
    max-width: 70rem;
    height: 2.7rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: inherit;
    @media (min-width: 800px){
        padding: 0 2rem;
        height: 3.3rem;
    }
`
const NavMenu = styled.ul`
    position: fixed;
    left: 0;
    right: 0;
    bottom: ${({show}) => show ? '0' : '-100%'};
    transition: bottom 500ms ease;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 1rem 0 3rem;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
    background-color: hsl(250, 100%, 5%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    justify-items: center;
    align-items: center;
    z-index: inherit;
    @media (min-width: 800px){
        position: static;
        border-radius: 0;
        padding: 0;
        box-shadow: initial;
        background-color: transparent;
        grid-template-columns: repeat(6, auto);
    }
`
const NavItem = styled.li``
const Navlink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    @media (min-width: 800px){
        flex-direction: row;
        font-size: 1.1rem;
    }
    svg {
        font-size: 1.1rem;
        margin-bottom: 3px;
        @media (min-width: 800px){
            margin: 0 5px 0 0;
            font-size: 1.2rem;
        }
    } 
`
const LogoName = styled.h3`
    font-size: 1.2rem;
    @media (min-width: 800px){
        font-size: 1.3rem;
    }
`
const BarIcon = styled(AiOutlineAppstore)`
    font-size: 1.7rem;
    cursor: pointer;
    @media (min-width: 800px){
        display: none;
    }
`
const CloseIcon = styled(FaTimes)`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    @media (min-width: 800px){
        display: none;
    }
`

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