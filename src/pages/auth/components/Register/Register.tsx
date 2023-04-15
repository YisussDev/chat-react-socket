import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const submitRegister = (event:any) => {
    event.preventDefault();
  }

  return (
    <div className='form-container'>
      <form className='form-login' onSubmit={(event)=>submitRegister(event)} autoComplete='off'>
        <h2 className='mb-2'>¡Bienvenido a Chat Pro!</h2>
        <h1>Registrarse</h1>
        <div className="form-floating mb-3" style={{width: '100%'}}>
          <input type="name" className="form-control" id="floatingInput"/>
          <label >Nombre de usuario: *</label>
        </div>
        <div className="form-floating mb-3" style={{width: '100%'}}>
          <input type="email" className="form-control" id="floatingInputEmail" />
          <label >Correo Electrónico: *</label>
        </div>
        <div className="form-floating mb-4" style={{width: '100%'}}>
          <input type="password" className="form-control" id="floatingInputPassword"/>
          <label >Contraseña: *</label>
        </div>
        <div className="form-floating mb-4" style={{width: '100%'}}>
          <input type="text" className="form-control" id="floatingInputLink"/>
          <label >Link de imagen: *</label>
        </div>
        <button className='btn btn-primary mb-2' type='submit'>Registrarse</button>
        <p className='mb-2'>¿Ya tienes cuenta?</p>
        <button className='btn btn-secondary' onClick={()=> navigate('/auth/login')}>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Register