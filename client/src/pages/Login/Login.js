import React, { useState, useEffect} from 'react'

const Login = () => {

    const [registerState, setRegisterState] = useState({
        name: '',
        username: ''
    })

    registerState.handleInputChange = event => {
        setRegisterState({ ...registerState, [event.target.name]: event.target.value})
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
                    value={registerState.userName}
                    onChange={registerState.handleInputChange}
                    />
                    <button>Create Account</button>
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
