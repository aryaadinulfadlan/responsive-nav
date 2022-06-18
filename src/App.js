import React from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import NavComponent from './components/NavComponent'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Services from './components/Services'
import About from './components/About'
import Setting from './components/Setting'
import Help from './components/Help'

const Page = styled.div`
  height: 100vh;
  position: relative;
`
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 2.7rem);
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 800px){
    font-size: 1.4rem;
    height: calc(100% - 3.3rem);
    top: 3.3rem;
  }
`
export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Page>
        <NavComponent/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/setting' element={<Setting/>} />
          <Route path='/help' element={<Help/>} />
        </Routes>
      </Page>
    </>
  )
}
