import { Routes, Route } from 'react-router-dom'

import Global from './pages/global/Global'
import NavBar from './shared/layout-components/NavBar/NavBar'
import Private from './pages/private/Private'
import Home from './pages/home/Home'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className='app_container'>
          <Routes>
            <Route path='global' element={<Global/>}></Route>
            <Route path='home' element={<Home/>}></Route>
            <Route path='private' element={<Private/>}></Route>
          </Routes>
      </div>
      <NavBar />
    </div>
  )
}

export default App
