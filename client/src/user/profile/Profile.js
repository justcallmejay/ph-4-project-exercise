import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Edit from './Edit'
import Confirm from './Confirm';
import { UserContext } from '../../context/account';
import './Profile.css'

function Profile( { updateUser } ) {

    const { currentUser } = useContext(UserContext)

    const history = useHistory()

    const [ toggleDelete, setToggleDelete ] = useState(false)
    const [ displayEdit, setDisplayEdit ] = useState(null)
    const [ toggleEdit, setToggleEdit ] = useState(null)
    const [ errors, setErrors ] = useState([])
    const [ formData, setFormData ] = useState({
        username: currentUser.username,
        email: currentUser.email,
        weight: currentUser.weight
    })

    function handleDeleteToggle() {
        setToggleDelete(toggleDelete => !toggleDelete)
    }

    //This prevents user from displaying edit button while a different input field is rendered
    function handleMouseOver(obj) {
      if (formData.username === currentUser.username && 
          formData.email === currentUser.email && formData.weight === currentUser.weight)
        setDisplayEdit(obj)
    }

    //this prevents user from clicking edit button while an input field is changed
    function handleEdit(obj) {
      if (formData.username === currentUser.username && 
        formData.email === currentUser.email && formData.weight === currentUser.weight)
        setToggleEdit(obj)
    }

    function cancelEdit(obj) {
      setToggleEdit('');
      setFormData(prevFormData => ({
        ...prevFormData,
        [obj]: currentUser[obj]
      }));
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

    function handleClearErrorMsg() {
      if (errors) {
        setErrors([])
      } 
    }

    function handleUpdateChange(obj) {
      let attr = obj
      let key = formData[obj]
          fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              [attr] : key
              }),
          })
            .then((res) => {
              if (res.ok) {
                // console.log(res)
                res.json().then((res) => {
                  updateUser(res);
                  // console.log(res)
                  history.push(`/user/${res.username}`);
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
            <div className='profile-container fl' onClick={handleClearErrorMsg}>
                <div className='profile-label'>
                    {toggleEdit === 'username' ? 
                    <Confirm quote={'Enter new Username:'} cancelEdit={cancelEdit} handleArg={'username'} errors={errors} formData={formData.username} handleChange={handleChange} handleUpdateChange={handleUpdateChange} handleEdit={handleEdit} />
                    :
                    <Edit handleArg={'username'} quote={'Username:'} currentUser={currentUser.username} displayEdit={displayEdit} handleMouseOver={handleMouseOver} handleEdit={handleEdit}/>
                    }
                    {toggleEdit === 'email' ? 
                    <Confirm quote={'Enter new email'} cancelEdit={cancelEdit} handleArg={'email'} errors={errors} formData={formData.email} handleChange={handleChange} handleUpdateChange={handleUpdateChange} handleEdit={handleEdit} />
                    :
                    <Edit handleArg={'email'} quote={'Email:'} currentUser={currentUser.email} displayEdit={displayEdit} handleMouseOver={handleMouseOver} handleEdit={handleEdit}/>
                    }

                    {toggleEdit === 'weight' ? 
                    <Confirm quote={'Enter new weight:'} cancelEdit={cancelEdit} handleArg={'weight'} errors={errors} formData={formData.weight} handleChange={handleChange} handleUpdateChange={handleUpdateChange} handleEdit={handleEdit} />
                    :
                    <Edit handleArg={'weight'} quote={'Weight:'} currentUser={currentUser.weight} displayEdit={displayEdit} handleMouseOver={handleMouseOver} handleEdit={handleEdit}/>
                    }
                </div>
                <div className='delete-acc-container fl' >
                    <p onClick={handleDeleteToggle}>Delete account?</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Profile;