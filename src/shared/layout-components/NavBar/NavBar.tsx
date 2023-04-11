import { NavLink } from 'react-router-dom'

import './NavBar.css'

export default function NavBar() {

  return (
    <div className='nav_container'>
      <NavLink to={'global'} className={({ isActive }) =>
         isActive ? "nav_button active" : "nav_button"
      }>
        <i className='fa fa-globe'></i> Global
      </NavLink>
      <NavLink to={'home'} className={({ isActive }) =>
        isActive ? "nav_button active" : "nav_button"
      }>
        <i className='fa fa-home'></i> Home
      </NavLink>
      <NavLink to={'private'} className={({ isActive }) =>
        isActive ? "nav_button active" : "nav_button"
      }>
        <i className='fa fa-lock'></i> Private
      </NavLink>
    </div>
  )
}
