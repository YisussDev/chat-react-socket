import React, { useEffect, useState } from 'react'

import './Home.css'

export default function Home() {

  const [dataUser, setDataUser] = useState<any>({});

  useEffect(()=>{
    let dataUser = localStorage.getItem('data');
    if(!dataUser) return;
    let dataUserParse = JSON.parse(dataUser);
    setDataUser(dataUserParse);
  },[])



  return (
    <div className='home_container'>
      <h2>¡Bienvenido/a!</h2>
      <div className="card" style={{width: "18rem"}}>
        <img src={dataUser.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-text" style={{textAlign: 'center'}}>{dataUser.name}</h2>
        </div>
      </div>
    </div>
  )
}
