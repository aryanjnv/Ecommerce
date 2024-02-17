import React from 'react'
import classes from './About.module.css'
import Banner from '../Banner/Banner'

const About = () => {
  return (
    <div>
        <Banner/>
        <h1 className={classes.heading}>About</h1>
        <div className={classes.maindiv}>
            <img className={classes.image} src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" height='300px' width='300px' alt="" />

        <p className={classes.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laborum nulla eaque 
            totam itaque explicabo pariatur autem odit expedita aliquam maiores, deserunt rerum quidem, 
            minima voluptas. Aliquam expedita rerum aliquid? Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Ipsam explicabo voluptatibus aspernatur corrupti facilis dignissimos 
            placeat ipsa laudantium totam iusto inventore illo dolor quo architecto, exercitationem 
            cupiditate quasi tenetur consectetur! Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Magnam eaque a facilis quasi quisquam itaque, nisi magni eligendi ad labore similique
             aliquid facere mollitia recusandae alias optio excepturi voluptatem? Enim!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laborum nulla eaque 
            totam itaque explicabo pariatur autem odit expedita aliquam maiores, deserunt rerum quidem, 
            minima voluptas. Aliquam expedita rerum aliquid? Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Ipsam explicabo voluptatibus aspernatur corrupti facilis dignissimos 
            placeat ipsa laudantium totam iusto inventore illo dolor quo architecto, exercitationem 
            cupiditate quasi tenetur consectetur! Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Magnam eaque a facilis quasi quisquam itaque, nisi magni eligendi ad labore similique
             aliquid facere mollitia recusandae alias optio excepturi voluptatem? Enim!</p>

        </div>
     
    </div>
  )
}

export default About