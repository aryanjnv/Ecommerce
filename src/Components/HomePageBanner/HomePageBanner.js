import React from 'react'
import classes from './HomePageBanner.module.css'

const HomePageBanner = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.heading}>The Generics</h1>
        <p className={classes.p}>Get Our Latest Album</p>
        <h1 className={classes.play}>▶︎</h1>

    </div>
  )
}

export default HomePageBanner