import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent mb-5">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className="navbar-toggle">
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </button>
                                </div>
                                <Link  to='/'className="navbar-brand">Bienvenido empleado </Link>
                                <Link to='directoraccount'className="navbar-brand" >Director account </Link>
                                
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                                aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <form>
                                    <div className="input-group no-border">
                                        <input type="text" value="" className="form-control" placeholder="Buscar empleado..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="nc-icon nc-zoom-split"></i>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item btn-rotate dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="nc-icon nc-bell-55"></i>
                                            <p>
                                                <span className="d-lg-none d-md-block">Acciones</span>
                                            </p>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to='/user'>Mi perfil</Link>
                                            <a className="dropdown-item" href="#">Notificaciones</a>
                                            <a className="dropdown-item" href="#">Salir</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

    )
}

export default Navbar
