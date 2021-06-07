import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start margin-top-footer footer">

            <div className="container p-4">

                <div className="row">


                    <div className="col-lg-6 col-md-6 mb-6 mb-md-0">
                        <h5 className="text-uppercase">CONOCENOS</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Reporte económico 2020</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Lee nuestras historias</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Anuario 2019</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Anuario 2020</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">CONTACTANOS</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Por mail</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Por teléfono</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Me quiero involucrar</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="text-center p-3" >
                © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>

    )
}

export default Footer
