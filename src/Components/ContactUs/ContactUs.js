import React, { useState } from 'react'
import classes from './ContactUs.module.css'

const ContactUs = () => {
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [mobile,setMobile]=useState('')
   const [issue,setIssue]=useState('')

   const nameChangeHandler=(event)=>{
    setName(event.target.value)
   }
   const emailChangeHandler=(event)=>{
    setEmail(event.target.value)
   }
   const mobileChangeHandler=(event)=>{
    setMobile(event.target.value)
   }
   const issueChangeHandler=(event)=>{
    setIssue(event.target.value)
   }

  async  function submitHandler(event){
    event.preventDefault();
    const newObj={
        name,
        email,
        mobile,
        issue
    }
    const response=  await fetch('https://react-http-834f8-default-rtdb.firebaseio.com/contactData.json',{
        method:'POST',
        body:JSON.stringify(newObj),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data=await response.json();
    console.log(data)

    setName('')
    setEmail('')
    setMobile('')
    setIssue('')
    }
  return (
    <>
    <h1 className={classes.heading}>Contact Us</h1>
    <form className={classes.formContainer} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={nameChangeHandler} value={name}/>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' onChange={emailChangeHandler} value={email}/>
        <label htmlFor="mobile">Mobile No:</label>
        <input type="number"  id='mobile' onChange={mobileChangeHandler} value={mobile}/>
        <label htmlFor="issue">Your Issue</label>
        <textarea name="issue" id="issue" cols="10" rows="5" onChange={issueChangeHandler} value={issue}></textarea>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default ContactUs
