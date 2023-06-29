import { useState } from "react";

const initialUserForm = {
    username:'',
    password:'',
    email:''
}

export const UserForm =({ handlerAddUser }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {username, password, email} = userForm

    //target corresponde al valor que identifica el input (name y value), por eso se pasa por argumento.
    const onInputChange = ({target}) => {
        //console.log(target.value)

        //Name y value que pertenecen al input
        const {name, value} = target

        //guardar el valor en el atributo name
        setUserForm({
            //pasamos los datos que tiene el estado con el operador spreed "..."
            ...userForm,
            //Se actualiza el campo
            [name] : value,
            //La línea anterior se llama propiedad computada del objeto, que es variable según el campo o input del formulario
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('enviando elformulario..')
        if(!username || !password || !email){
            alert('Debe completar los campos del formulario')
            return;
        }
        //console.log(userForm)

        //guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    };
    return(
        <form onSubmit={ onSubmit }>
            <input type="text" className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={ onInputChange }/>
            <input type="password" className="form-control my-3 w-75" placeholder="Password" name="password" value={password} onChange={ onInputChange }/>
            <input type="email" className="form-control my-3 w-75" placeholder="Email" name="email" value={email} onChange={ onInputChange }/>
            
            <button className="btn btn-primary" type="submit">
                Crear
            </button>
        </form>
    );
}