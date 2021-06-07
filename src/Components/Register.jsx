import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { postData } from '../states/userReducer'
import { useInput } from '../utils/useInput'
import axios from 'axios'

const Register = () => {
    const dispatch = useDispatch();

    const mail = useInput('name')
    const password = useInput('password')
    const name = useInput('name');
    const lastName = useInput("lastName");
    const phone = useInput("phone")
    const dni = useInput("dni");
    const cuil = useInput("cuil");
    const bankName = useInput("bankName");
    const bankClass = useInput("bankClass");
    const selectRegion = useInput("selectRegion")
    const cbu = useInput("cbu");
    const province = useInput("province");
    const city = useInput("city");
    const zipCode = useInput("zipCode");
    const direction = useInput("direction");
    const education = useInput("education");
    const workExperience = useInput("workExperience");

    const handleSubmit = (e) => {
        e.preventDefault();

       dispatch(
            postData({
                mail: mail.value,
                password: password.value,
                name: name.value,
                lastName: lastName.value,
                dni: dni.value,
                phone: phone.value,
                selectRegion: selectRegion.value,
                cuil: cuil.value,
                bankName: bankName.value,
                bankClass: bankClass.value,
                cbu: cbu.value,
                province: province.value,
                city: city.value,
                zipCode: zipCode.value,
                direction: direction.value,
                education: education.value,
                workExperience: workExperience.value
            })
        ); 
    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit} >
                <h1 className='margin-top-form text-center'>Ingrese sus datos</h1>
                <hr />
                <div  >
                    <h2>Usuario</h2>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input
                            {...mail}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Email" />
                    </div>


                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input
                            {...password}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                    </div>


                </div>
                <div>
                    <h2>Datos personales</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input
                            {...name}
                            type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Apellido</label>
                        <input
                            {...lastName}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Apellido" />
                    </div>


                    <div className="form-group">
                        <label for="exampleInputPassword1">Telefono</label>
                        <input
                            {...phone}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Telefono" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">DNI</label>
                        <input
                            {...dni}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="DNI" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Cuil</label>
                        <input
                            {...cuil}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Cuil" />
                    </div>



                </div>
                <div>
                    <h2>Datos bancarios</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre del banco</label>
                        <input
                            {...bankName}
                            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Banco" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Tipo de cuenta</label>
                        <input
                            {...bankClass}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Tipo de cuenta" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">CBU</label>
                        <input
                            {...cbu}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="CBU" />
                    </div>

                </div>
                <div>
                    <h2>Información Regional</h2>
                    {/* select */}
                    <div className="form-group">
                    <label for="exampleInputPassword1">Región</label>
                    <select {...selectRegion} className="form-select select-width" aria-label="Default select example">
                        <option selected>...</option>
                        <option value="1">Santiago</option>
                        <option value="2">Añatuya</option>
                        <option value="3">Monte Quemado</option>
                    </select>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Provincia</label>
                        <input
                            {...province}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Provincia" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Ciudad</label>
                        <input
                            {...city}
                            type="text" className="form-control" id="exampleInputPassword1" placeholder="Ciudad" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Codigo Postal</label>
                        <input
                            {...zipCode}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Codigo Postal" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Dirección</label>
                        <input
                            {...direction}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Direccion" />
                    </div>

                    <hr />

                </div>

                <div>
                    <h2>Información adicional</h2>

                    <div className="form-group">
                    <label for="exampleInputPassword1">Educación</label>
                    <select {...education} className="form-select select-width" aria-label="Default select example">
                        <option selected>...</option>
                        <option >Secundario Incompleto</option>
                        <option >Secundario Completo</option>
                        <option >Terciario</option>
                        <option >Universitario Incompleto</option>
                        <option >Universitario Completo</option>
                    </select>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Experiencia Laboral</label>
                        <input
                            {...workExperience}
                            type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Experiencia Laboral" />
                    </div>
 
                    <input type="file" />

                    <hr />

                    <hr />
                </div>
                <button type="submit" className="btn btn-danger">Confirmar Registro
                    </button>
                <hr/>
                <Link to='/'><a> Volver atrás </a></Link>
            </form>

        </div>
    )
}

export default Register
