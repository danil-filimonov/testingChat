import React from 'react'

import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Room from './pages/Room'

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
`

const App = () => {  
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:id' element={<Room />} />
        </Routes>
      </AppWrapper>
    </Router>
  )
}

export default App
