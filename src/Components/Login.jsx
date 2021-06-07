import React from 'react'
import { useDispatch } from "react-redux";
import { postData } from '../states/userReducer'
import { useInput } from '../utils/useInput'


const Login = () => {
    const dispatch = useDispatch();

    const mail = useInput('name')
    const password = useInput('password')

    const handleLogin = (e) =>{
 /*       dispatch(postLogin({
            mail: mail.value,
            password: password.value
        }))  */
    }

    return (
        <div className='container'>

            <form onSubmit={handleLogin} className='margin-top-form'>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Tu Email</label>
                    <input 
                    {...mail}
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu email" />
                    <small id="emailHelp" className="form-text text-muted">Tus datos son privados</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Tu contraseña</label>
                    <input 
                    {...password}
                    type="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña" />
                </div>

                <button type="submit" className="btn btn-danger mt-2 mb-3">Loguearse</button>
            </form>

        </div>
    )
}

export default Login
