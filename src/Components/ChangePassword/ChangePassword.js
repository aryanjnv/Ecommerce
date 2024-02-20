import React, { useContext, useRef } from 'react'
import classes from './ChangePassword.module.css'
import AuthContext from '../../Auth-Context/auth-context';

const ChangePassword = () => {
  const newPasswordInputRef=useRef();

  const authcontext=useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    console.log(enteredNewPassword)
    console.log(authcontext.token)
  
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authcontext.token,
        password: enteredNewPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      alert('Password Changed Succesfully')
      if (!res.ok) {
        throw new Error('Failed to change password');
      }
    
      // Password changed successfully
      // You might want to redirect or show a success message here
    })
    .catch(error => {
      console.error('Error changing password:', error);
      // Handle error, show error message, etc.
    });
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.heading}>Change Password</h1>
        <label className={classes.label} htmlFor='password'>Enter New Password</label><br/>
        <input className={classes.input} type="password" minLength='7' id='password' ref={newPasswordInputRef} /><br/>
        <button type='submit'>Change Password</button><br/>
    </form>
  )
}

export default ChangePassword