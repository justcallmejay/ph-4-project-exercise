import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

function Login( { updateUser } ) {

    const history = useHistory()

    const [ error, setError ] = useState([])
    const [ formData, setFormData ] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        const { name, value } = e.target

        setFormData(acc => {
            return{
                ...acc, [name]:value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                updateUser(user)
                history.push(`/user/${user.username}`)
            })
            } else {
                return res.json()
            }
        })
        .then(data => {
            if (data) {
                setError(data)
            }
        })
        .catch(error => {
            if (error) {
                console.log(error)
            }
        })
}

    return(
        <div className='login cc'>
            <form className='login-pg-container cc' onSubmit={handleSubmit}>
                <div className='login-title fl'>
                    <h3>Login</h3>
                </div>
                <div className='login-container fl'>
                    <div className='login-title-container cc'>
                        <h3>Username:</h3>
                        <h3>Password:</h3>
                    </div>
                    <div className='login-input-container cc'>
                        <input type='text' name="username" value={formData.username} onChange={handleChange} placeholder='username'/>
                        <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
                    <div className='login-error'>
                        {error ? <h6>{error.error}</h6> : ""}
                    </div>
                    </div>
                </div>
                <div className='login-signup-link cc'>
                    <div className='login-btn'>
                        <button>Login</button>
                    </div>
                </div>
            </form>
                    <div className='login-link-container fl'>
                        <div className='login-signup fl'>
                           <Link to='/signup'>
                                <p>Don't have an account?  Sign up here</p>
                            </Link>
                        </div>
                        <div className='login-home fl'>
                            <Link to='/'>
                                <p>{'<<< Back'}</p>
                            </Link>
                        </div>
                    </div>
        </div>
    )
}

export default Login;