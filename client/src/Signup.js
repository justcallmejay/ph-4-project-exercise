import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Signup.css'

function Signup() {

    const history = useHistory()

    const [ errors, setErrors ] = useState([])
    const [ pwMatch, setPwMatch ] = useState('')
    const [ formData, setFormData ] = useState({
        name: "",
        username: "",
        password: "",
        reenterPassword: "",
        email: "",
        weight: ""
    })

    function toggleErrorDisplay() {
        setErrors([])
        if (pwMatch) {
            setPwMatch('')
        }
    }

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
        if (formData.password !== formData.reenterPassword) {
            setPwMatch('Password must match')
        } else {
        fetch('/users', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                name: formData.name,
                username: formData.username,
                password: formData.password,
                email: formData.email,
                weight: formData.weight
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then((res) => {
                    history.push('/');
                    console.log(res);
            });
            } else {
                res.json().then((error) => {
                  setErrors(error.errors);
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }

    return(
        <div className='signup fl'  onClick={toggleErrorDisplay}>
            <form className='signup-container' onSubmit={handleSubmit}>
                <div className='signup-label fl'>
                    <p>Register</p>
                </div>
                <div className='signup-field rc'>
                    <div className='signup-input-label-container fl'>
                        <p>Name:</p>
                        <p>Username:</p>
                        <p>Password:</p>
                        <p>Re-enter Password:</p>
                        <p>Email:</p>
                        <p>Weight:</p>
                    </div>
                    <div className='signup-input-field-container fl'>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='name'/>
                        <div className='signup-error rc'>
                            {errors ? <h6>{errors.name}</h6> : ""}
                        </div>
                        <input type='text' name='username' value={formData.username} onChange={handleChange} placeholder='username'/>
                        <div className='signup-error rc'>
                            {errors ? <h6>{errors.username} </h6> : ""}
                        </div>
                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='password'/>
                        <div className='signup-error rc'>
                            {errors ? <h6>{errors.password} </h6> : ""}
                        </div>
                        <input type='password' name='reenterPassword' value={formData.reenterPassword} onChange={handleChange} placeholder='re-enter password'/>
                        <div className='signup-error rc'>
                            {pwMatch ? <h6>{pwMatch}</h6> : ""}
                        </div>
                        <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='email'/>
                        <div className='signup-error rc'>
                            {errors ? <h6>{errors.email}</h6> : ""}
                        </div>
                        <input className='signup-weight' type='number' name='weight' value={formData.weight} min='3' max='1000' step='0.1'onChange={handleChange} placeholder='weight'/>
                        <div className='signup-error rc'>
                            {errors ? <h6>{errors.weight}</h6> : ""}
                        </div>
                    </div>
                </div>
                <div className='signup-field-btn fl'>
                   <button className='home-btn' onClick={handleSubmit}>Sign Up</button>
                </div>
            </form>
                <div className='back-btn fl'>
                   <Link to='/'>
                       <p>{'<<< Back'}</p>
                   </Link>
                </div>
        </div>
    )
}

export default Signup;