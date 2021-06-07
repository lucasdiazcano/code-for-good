import React, {useState} from 'react'
import { Route } from 'react-router-dom'
import Register from './Components/Register'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DirectorAccount from './Components/DirectorAccount'
import Metrics from './Components/Metrics'
import Tabla from './Components/Tabla'
import Tabla2 from './Components/Tabla2'
import Tabla3 from './Components/Tabla3'
import Asistencia from './Components/Asistencia'
import EmployeeAccount from './Components/EmployeeAccount'
import Projects from './Components/Projects'
import MisDatos from './Components/MisDatos'

function App() {

  return (
    <> 
     < Navbar className='mb-5'/>
    
    <div className="container font-page">

      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/directoraccount" component={DirectorAccount}/>
      <Route exact path="/user" component={EmployeeAccount}/>
      <Route exact path="/metrics" component={Metrics}/>
      <Route exact path="/metrics" component={Metrics}/>
      <Route exact path="/tabla" component={Tabla}/>
      <Route exact path="/tabla2" component={Tabla2}/>
      <Route exact path="/tabla3" component={Tabla3}/>
      <Route exact path="/asistencia" component={Asistencia}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/misdatos" component={MisDatos}/>

    </div>
    {/* <Tabla/> */}
    < Footer/>
    </>
  );
}

export default App;


