import React from 'react'
import HomePageBanner from '../HomePageBanner/HomePageBanner'
import classes from './Home.module.css'

const Home = () => {
    const TourElements=[
        {
            date:'JUL16',
            place:'DETROIT, MI',
            city:'DTE ENERGY MUSIC THEATRE'
        },
        {
            date:'JUL19',
            place:'TORONTO,ON',
            city:'BUDWEISER STAGE'
        },
        {
            date:'JUL22',
            place:'BRISTOW, VA',
            city:'JIGGY LUBE LIVE'
        },
        {
            date:'JUL27',
            place:'DETROIT, MI',
            city:'DTE ENERGY MUSIC THEATRE'
        },
        {
            date:'AUG2',
            place:'PHOENIX, AZ',
            city:'AK-CHIN PAVILION'
        },
        {
            date:'AUG7',
            place:'LAS VEGAS, NV',
            city:'T-MOBILE ARENA'
        },

    ]
    return (
        <div>
          <HomePageBanner />
          <h2 className={classes.heading}>TOUR</h2>
          <table className={classes.tourTable}>
            {/* <thead>
              <tr>
                <th>Date</th>
                <th>Place</th>
                <th>City</th>
                <th></th> 
              </tr> */}
            {/* </thead> */}
            <tbody>
              {TourElements.map((item, index) => (
                <tr className={classes.item} key={index}>
                  <td className={classes.date}>{item.date}</td>
                  <td className={classes.place}>{item.place}</td>
                  <td className={classes.city}>{item.city}</td>
                  <td><button>BUY TICKETS</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

}

export default Home
