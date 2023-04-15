import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Global from './global/Global'
import Home from './home/Home'
import Private from './private/Private'
import NavBar from '../../shared/layout-components/NavBar/NavBar'

const BackOffice = () => {

  return (
    <>
        <Routes>
            <Route path='global' element={<Global />}></Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='private' element={<Private />}></Route>
        </Routes>
        <NavBar />
    </>
  )
}

export default BackOffice