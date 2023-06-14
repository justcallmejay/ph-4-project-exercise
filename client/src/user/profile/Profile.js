import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Edit from './Edit'
import Confirm from './Confirm';
import './Profile.css'

function Profile( { currentUser, updateUser } ) {

    const history = useHistory()

    const [ toggleDelete, setToggleDelete ] = useState(false)
    const [ displayEdit, setDisplayEdit ] = useState(null)
    const [ toggleEdit, setToggleEdit ] = useState(null)
    const [ formData, setFormData ] = useState({
        username: currentUser.username,
        email: currentUser.email,
        weight: currentUser.weight
    })

    function handleDeleteToggle() {
        setToggleDelete(toggleDelete => !toggleDelete)
    }

    function handleMouseOver(obj) {
        setDisplayEdit(obj)
    }

    function handleEdit(obj) {
        setToggleEdit(obj)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(acc => {
            return{
                ...acc, [name]:value
            }
        })
    }

    function deleteAccount() {
        fetch(`/users/${currentUser.id}`, {
            method: "DELETE"
        })
        .then(res => {
            if (res.ok) {
                history.push('/')
            }
        })
    }

    //fix validates
    //fix update

    function handleUpdateChange() {
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                weight: formData.weight
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then((res) => { 
                    updateUser(res) 
                    history.push(`/user/${res.username}`)
                })
                setToggleEdit('')
            }
        })
        .then(data => {
            if (data)
            console.log(data.error)
        })
        .catch(error => {
            if (error) {
                console.log(error)
            }
        })
    }

    return(
        <>
        {toggleDelete ? 
            <div className='delete-account-msg rc'>
                <div className='delete-account-msg-container fl'>
                    <p className='rc'>Are you sure you want to delete your account?  Doing so will erase all information associated with this account.</p>
                    <div className='delete-account-btn-container rc'>
                        <button onClick={deleteAccount}>Yes</button><button onClick={handleDeleteToggle}>No</button>
                    </div>
                </div>
            </div>
            : ""}
        <div className='profile rc'>
            <div className='profile-container fl'>
                <div className='profile-label'>
                    {toggleEdit === 'username' ? 
                    <Confirm quote={'Enter new Username:'} handleArg={'username'} formData={formData.username} handleChange={handleChange} handleUpdateChange={handleUpdateChange} handleEdit={handleEdit} />
                    :
                    <Edit handleArg={'username'} quote={'Username:'} currentUser={currentUser.username} displayEdit={displayEdit} handleMouseOver={handleMouseOver} handleEdit={handleEdit}/>
                    }

                    {toggleEdit === 'email' ? 
                    <Confirm quote={'Enter new email'} handleArg={'email'} formData={formData.email} handleChange={handleChange} handleUpdateChange={handleUpdateChange} handleEdit={handleEdit} />
                    :
                    <Edit handleArg={'email'} quote={'Email:'} currentUser={currentUser.email} displayEdit={displayEdit} handleMouseOver={handleMouseOver} handleEdit={handleEdit}/>
                    }

                    {toggleEdit === 'weight' ? 
                    <Confirm quote={'Enter new weight:'} handleArg={'weight'} formData={formData.weight} handleChange={handleChange} handleUpdateChange={handleUpdateChange} handleEdit={handleEdit} />
                    :
                    <Edit handleArg={'weight'} quote={'Weight:'} currentUser={currentUser.weight} displayEdit={displayEdit} handleMouseOver={handleMouseOver} handleEdit={handleEdit}/>
                    }
                </div>
                <div className='delete-acc-container fl' onClick={handleDeleteToggle}>
                    <p>Delete account?</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Profile;