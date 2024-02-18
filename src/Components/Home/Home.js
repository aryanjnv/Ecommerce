import React from 'react'
import HomePageBanner from '../HomePageBanner/HomePageBanner'
import classes from './Home.module.css'
import MovieData from '../MovieData/MovieData'
import AddNewMovie from '../MovieData/AddNewMovie'

const Home = () => {
   
    return (
        <div>
          <HomePageBanner />
          <h2 className={classes.heading}>MOVIES</h2>
        
          <MovieData/>
        </div>
      );
      
}

export default Home
