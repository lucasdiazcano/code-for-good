import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheck } from "react-icons/fi";
import { BiWorld, BiBriefcase, BiBarChartAlt, BiGlobe } from "react-icons/bi";



const DirectorAccount = () => {

    return (
        <div className='diraccount-margin-top'>

            <div className="wrapper ">
                <div className="sidebar" data-color="white" data-active-color="danger">
                    <h1>Admin Account</h1>
                    <div className="logo">
                        <Link to='/'><center className='navbar-title'>Haciendo caminos</center></Link>

                        <a href="https://haciendocamino.org.ar/" className="simple-text logo-normal">

                            <div className="logo-haciendo-caminos">
                                <img src="https://innovatech.com.ar/wp-content/uploads/2017/07/ISOLOGO-Haciendo-Camino-300x268.png" />
                            </div>
                        </a>
                    </div>
                    <div className="container sidebar-wrapper">
                        <ul className="nav">
                            <li className="active ">
                                <a href="javascript:;">
                                    <FiCheck />
                                    <Link to='asistencia'><p>Confirmar asistencias</p></Link>
                                </a>
                            </li>
                            <li className="active ">
                                <a href="javascript:;">
                                    <BiGlobe />
                                    <Link to='tabla'><p>Ver todos</p></Link>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <BiWorld />
                                    <Link to='tabla2'><p>Compañeros regionales</p></Link>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <BiBriefcase />
                                    <Link to='tabla3'><p>Compañeros por proyecto</p></Link>
                                </a>
                            </li>
                            <li>
                                <Link to='metrics'>
                                    <BiBarChartAlt />
                                    <p>Metricas</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel" >
                </div>
            </div>
        </div>
    )
}

export default DirectorAccount
