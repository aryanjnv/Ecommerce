import React from 'react'
import { useNavigate } from 'react-router'
import classes from './NotFound.module.css'

const NotFound = () => {
    const naviagte=useNavigate();

    const RedirectHomepage=()=>{
        naviagte('/')
    }
  return (
    <div className={classes.maindiv}>
    <h1 className={classes.h1}>Error 404</h1>
    <h3 className={classes.h3}>Page Not Found</h3>
    <button onClick={RedirectHomepage}>Go To Home Page</button>
    </div>
  )
}

export default NotFound
