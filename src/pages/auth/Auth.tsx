import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { validateToken } from './services/validate'

const Auth = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    validateToken()
    .then(isValid => isValid && navigate('/app/home'))
  },[])


  return (
    <>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='*' element={<Navigate to={'login'} />}></Route>
      </Routes>
    </>
  )
}

export default Auth