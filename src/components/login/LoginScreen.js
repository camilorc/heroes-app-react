import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext)

    const [state, handleInputChange] = useForm({
        nombre: ''
    });

    const { nombre } = state;

    const handleLogin = () => {

        if(nombre === ''){
            alert('Nombre Obligatorio');
            return
        }

        const pathname = localStorage.getItem('lastPath') || '/';


        dispatch({
            type: types.login,
            payload: {
                name: nombre
            }
        });

        history.replace(pathname);

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        className="form-control"
                        autoComplete="off"
                        required
                    />

                </div>

            </div>


            <button
                className="btn btn-primary mt-2"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
