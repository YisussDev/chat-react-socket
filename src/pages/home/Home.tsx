import React, { useEffect, useState } from 'react'

export default function Home() {

  const [nameUser, setNameUser] = useState('');

  useEffect(()=>{
    const nameUserLocal = localStorage.getItem('nameUser') || 'Anonimo';
    localStorage.setItem('nameUser', nameUserLocal); 
  },[])

  const submitForm = (event:any) => {
    event.preventDefault();
    if(event.target.nameUser.value.length == 0) return;
    if(event.target.imageUser.value.length == 0) return;
    localStorage.setItem('nameUser', event.target.nameUser.value);
    localStorage.setItem('imageUser', event.target.imageUser.value);
    event.target.nameUser.value = '';
    event.target.imageUser.value = '';
  }


  return (
    <div>
      <h1>Bienvenido {nameUser}</h1>
      <form onSubmit={(event) => submitForm(event)}>
        <input type="text" name='nameUser' placeholder='Ingrese un nombre...'/>
        <input type="text" name='imageUser' placeholder='Ingrese un link...'/>
        <button type='submit'>Aceptar</button>
      </form>
    </div>
  )
}
