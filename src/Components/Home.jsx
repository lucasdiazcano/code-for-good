import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import logoHaciendoCamino from '../assets/logo-haciendo-camino.png'

const Home = () => {
    return (
        <div className='home'>
            <img src={logoHaciendoCamino} className='img-fluid mt-5'/>
            <Login/>
            
            <Link to='/register'><a >
                Quiero registrarme</a>
            </Link>
        </div>
    )
}

export default Home
