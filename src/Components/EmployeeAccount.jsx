import React from 'react'
import { Link } from 'react-router-dom'
import { BiWorld, BiBriefcase, BiBarChartAlt } from "react-icons/bi";
import MisDatos from './MisDatos'


const EmployeeAccount = () => {

    return (
        <div className='diraccount-margin-top'>

            <div className="wrapper ">
                <div className="sidebar" data-color="white" data-active-color="danger">
                    <h1>Employee Account</h1>
                    <div className="logo">
                        <Link to='/'>
                            <center className='navbar-title'>Haciendo caminos</center>
                        </Link>

                        <a href="https://haciendocamino.org.ar/" className="simple-text logo-normal">

                            <div className="logo-haciendo-caminos">
                                <img src="https://innovatech.com.ar/wp-content/uploads/2017/07/ISOLOGO-Haciendo-Camino-300x268.png" />
                            </div>
                        </a>
                    </div>
                    <div className="container sidebar-wrapper">
                        <ul className="nav">
                            <li className="active ">
                            </li>
                            <li>
                                <Link to='misdatos'>
                                    <BiWorld />
                                    <p>Mis datos</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='projects'>
                                    <BiBriefcase />
                                    <p>Mis proyectos</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                </div>
            </div>
        </div>
    )
}

export default EmployeeAccount