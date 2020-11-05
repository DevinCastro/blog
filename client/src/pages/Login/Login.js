import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Jumbotron, Button } from 'reactstrap';

const Login = () => {

    const [registerState, setRegisterState] = useState({
        name: '',
        username: ''
    })

    registerState.handleInputChange = event => {
        setRegisterState({ ...registerState, [event.target.name]: event.target.value})
    }

    registerState.handleAddAccount = event => {
        event.preventDefault()

        // console.log(registerState)
        axios.post('/api/users', {
            name: registerState.name,
            username: registerState.username 
        })
        .then(res => {console.log(res)})
        .catch(err => console.log(err))
    }

    return (
        <>
            <h1>This is the Login page</h1>

            <div>
                <h1>Register</h1>
                <form>
                    <label>Name</label>
                    <input 
                    name='name'
                    value={registerState.name}
                    onChange={registerState.handleInputChange}
                    />
                    <label>Username</label>
                    <input 
                    name='username'
                    value={registerState.username}
                    onChange={registerState.handleInputChange}
                    />
                    <button onClick={registerState.handleAddAccount}>Create Account</button>
                </form>
            </div>
            <div>
                <h1>Login</h1>
                <form>
                    <label>Username</label>
                    <input 
                    name='name'
                    />
                </form>
            </div>
        </>
    )
}

export default Login
