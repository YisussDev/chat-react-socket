import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'

import './App.css'
import Auth from './pages/auth/Auth'
import BackOffice from './pages/back-office/BackOffice'
import Spinner from './shared/components/Spinner/Spinner'
import { useEffect, useState } from 'react'
import { validateToken } from './pages/auth/services/validate'

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    validateToken()
    .then(isValid => {
      if((!isValid) && (!location.pathname.startsWith('/auth'))) {
        navigate('auth');
      }
    })

  }, [location.pathname])

  return (
    <div className="App">
      <div className='app_container'>
          <Routes>
            <Route path='auth/*' element={<Auth />}></Route>
            <Route path='app/*' element={<BackOffice />}></Route>
            <Route path='*' element={<Navigate to={'auth'}/>}></Route>
          </Routes>
      </div>
      <Spinner />
    </div>
  )
}

export default App
