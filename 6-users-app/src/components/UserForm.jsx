import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser, errors } = useUsers();
    
    const [userForm, setUserForm] = useState(initialUserForm);
    const [checked, setChecked] = useState(userForm.admin);
    const { id, username, password, email, admin } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onCheckboxChange = () => {
        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin: checked,
        }
        );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // if (!username || (!password && id === 0) || !email) {
        //     Swal.fire(
        //         'Error de validacion',
        //         'Debe completar los campos del formulario!',
        //         'error'
        //     );

        //     return;
        // }
        // if (!email.includes('@')) {
        //     Swal.fire(
        //         'Error de validacion email',
        //         'El email debe ser valido, incluir un @!',
        //         'error'
        //     );
        //     return;
        // }
        // console.log(userForm);

        // guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={ onSubmit }>
            <br />
            <video autoPlay muted loop>
                <source src="./src/video/video2.mp4" type="video/mp4" />
            </video>
            <div className="text-center mb-3">
                <input
                    className="form-control d-inline w-75"
                    placeholder="Username"
                    name="username"
                    value={ username}
                    onChange={onInputChange} />
                <p className="text-danger">{ errors?.username}</p>
            </div>
            {id > 0 || (
                <div className="text-center mb-3">
                    <input
                        className="form-control d-inline w-75"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                    <p className="text-danger">{errors?.password}</p>
                </div>
            )}

            <div className="text-center mb-3">
                <input
                    className="form-control d-inline w-75"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
                <p className="text-danger">{errors?.email}</p>
            </div>

            <div className="form-check d-inline-block mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="adminCheckbox"
                    name="admin"
                    checked={admin}
                    onChange={onCheckboxChange}
                />
                <label htmlFor="adminCheckbox" className="form-check-label" style={{color: "white"}}>
                    Admin
                </label>
            </div>
            {/* { id > 0 || <input
                <div className="text-center mb-3"></div>
                    className="form-control d-inline w-75"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange} />}
                <p className="text-danger">{errors?.password}</p>
             */}
            {/* <input
                className="form-control my-0 w-75 d-flex flex-column align-items-center"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.email}</p>

            <div className="my-3 form-check">
                <input type="checkbox"
                    name="admin"
                    checked={admin}
                    className="form-check-input"
                    onChange={onCheckboxChange}
                />
                <label className="form-check-label" style={{color: "white"}}>Admin</label>
            </div> */}

            <input type="hidden"
                name="id"
                value={id} />
            
            <div className="text-center">
                <button className="btn btn-primary" type="submit">
                    {id > 0 ? 'Editar' : 'Crear'}
                </button>

                {!handlerCloseForm || (
                    <button
                        className="btn btn-primary mx-2"
                        type="button"
                        onClick={onCloseForm}
                    >
                        Cerrar
                    </button>
                )}
            </div>
            {/* <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {!handlerCloseForm || <button
                className="btn btn-primary mx-3"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>} */}
            
        </form>
    )
}