
import './App.css'

import Welcome from './components/welcome'
import DogList from './components/doglist'
import DogInfo from './components/doginfo'

import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const NavMenu = () => {
    
  return (
  <div id="menu">
    <div id="menu_elements">
      <Link to="/welcome">
        <section className="menu_item">Welcome</section>
      </Link>
      <Link to="/doglist">
        <section className="menu_item">DogList</section>
      </Link>
    </div>
  </div>
  )
}

function App() {

  const [currentDog, setCurrentDog] = useState(null);
  
  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/'
          element= {<Welcome/>} />
        <Route path='/welcome'
          element= {<Welcome/>} />
        <Route path='/doglist'
          element= {<DogList currentDog={currentDog} setDog={setCurrentDog}/>}/>
          <Route path='/doginfo/:chipnumber'
          element= {<DogInfo currentDog={currentDog}/>}/>
      </Routes>
    </div>
  )
}

export default App
