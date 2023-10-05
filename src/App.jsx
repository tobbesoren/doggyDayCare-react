
import './App.css'

import Welcome from './components/welcome'
import DogList from './components/DogList'
import DogInfo from './components/DogInfo'

import { Link, Route, Routes } from 'react-router-dom'

const NavMenu = () => {
    
  return (
    <div id="menu">
      <div id="menu_elements">
        <Link to="/welcome">
          <section className="menu_item">Welcome</section>
        </Link>
        <Link to="/doglist">
          <section className="menu_item">Dog list</section>
        </Link>
      </div>
    </div>
  )
}

function App() {

  return (
    <div>
      <NavMenu/>
      <div id="content">
      <Routes>
        <Route path='/'
          element= {<Welcome/>} />
        <Route path='/welcome'
          element= {<Welcome/>} />
        <Route path='/doglist'
          element= {<DogList/>}/>
        <Route path='/doginfo/:chipnumber'
          element= {<DogInfo/>}/>
        <Route path='/doginfo/'
          element= {<DogInfo/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
