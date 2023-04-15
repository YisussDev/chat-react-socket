import React, { useEffect, useState } from 'react'
import './Spinner.css'
import { show } from '../Spinner/services/spinnerService'
import {Subscription} from 'rxjs'

const Spinner = () => {

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(()=>{
        show.subscribe(state => setIsActive(state))
        return () => {
          show.unsubscribe();
          };
    },[])

  return (
    <>
    {isActive ? 
    <div className='spinner_container'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div> : null}
    </>
  )
}

export default Spinner