import React, { useContext } from 'react'
import classes from './Store.module.css'
import CartContext from '../Context/cart-context'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'

const Store = (props) => {

  const cartContext=useContext(CartContext)

  const addItemHandler=(item,id)=>{
    console.log("item",item)
   cartContext.addItem(item,id)
  }
   
        
        
  return (
    <>
    <Banner/>
    <div className={classes.container}>
    {props.productsArr.map((item) => (
      <div key={item.album} className={classes.item}>
        <h2 className={classes.heading}>{item.album}</h2>
        <img src={item.imageUrl} alt="" />
       <Link to={`/products/${item.id}`}> <p className={classes.heading}>{item.title}</p></Link>
        <p className={classes.price}>${item.price}.00</p>
        <button className={classes.button} onClick={()=>addItemHandler(item,item.album)}>Add To Cart</button>
      </div>
    ))}
  </div>
  </>
  )
}

export default Store