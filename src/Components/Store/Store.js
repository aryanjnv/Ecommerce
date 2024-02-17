import React, { useContext } from 'react'
import classes from './Store.module.css'
import CartContext from '../Context/cart-context'
import Banner from '../Banner/Banner'

const Store = () => {

  const cartContext=useContext(CartContext)

  const addItemHandler=(item,id)=>{
    console.log("item",item)
   cartContext.addItem(item,id)
  }
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        album:'Album 1',

        quantity:1
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        album:'Album 2',

        quantity:1
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        album:'Album 3',

        quantity:1
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        album: 'Album 4',
       
        quantity:1
        
        }
        
        ]
        
        
  return (
    <>
    <Banner/>
    <div className={classes.container}>
    {productsArr.map((item) => (
      <div key={item.album} className={classes.item}>
        <h2 className={classes.heading}>{item.album}</h2>
        <img src={item.imageUrl} alt="" />
        <p className={classes.price}>${item.price}.00</p>
        <button className={classes.button} onClick={()=>addItemHandler(item,item.album)}>Add To Cart</button>
      </div>
    ))}
  </div>
  </>
  )
}

export default Store