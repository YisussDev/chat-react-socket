import React from 'react'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { show } from '../../../../shared/components/Spinner/services/spinnerService';

const Login = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const submitLogin = (data:any) => {
    show.next(true)
    axios.post('https://chat-pro-api-production.up.railway.app/login', data)
    .then(res => 
    {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('data', JSON.stringify({name: res.data.name, id: res.data.id, imgUrl: res.data.imgUrl}))
      navigate('/app/home')
    })
    .catch(err => console.log(err))
    .finally(()=>{
      setTimeout(()=>{
        show.next(false)
      },1000)
    })
  }

  const redirectToRegister = ()=>{
    navigate('/auth/register')
  }

  return (
    <div className='form-container'>
      <form className='form-login' onSubmit={handleSubmit(submitLogin) } autoComplete='off'>
        <h2 className='mb-1'>¡Bienvenido a Chat Pro!</h2>
        <h1 className='mb-2'>Iniciar sesión</h1>
        <div className="form-floating mb-3" style={{width: '100%'}}>
          <input type="email" className="form-control" id="floatingInputEmail" {...register('email', {required: true})} />
          {errors.email && <span>This field is required</span>}
          <label >Correo Electrónico: *</label>
        </div>
        <div className="form-floating mb-4" style={{width: '100%'}}>
          <input type="password" className="form-control" id="floatingInputPassword" {...register('password', {required: true})} />
          {errors.password && <span>This field is required</span>}
          <label >Contraseña: *</label>
        </div>
        <button className='btn btn-primary mb-2' type='submit'>Ingresar</button>
        <p className='mb-2'>¿No tienes cuenta?</p>
        <button className='btn btn-secondary' onClick={()=> redirectToRegister()}>Registrarse</button>
      </form>
    </div>
  )
}

export default Login