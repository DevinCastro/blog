import React from 'react'

const Login = () => {
    return (
        <>
            <h1>This is the Login page</h1>

            <div>
                <h1>Register</h1>
                <form>
                    <label>Name</label>
                    <input 
                    name='name'
                    />
                    <label>Username</label>
                    <input 
                    name='username'
                    />
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
