import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
  return (
    <Modal onClose={props.onClose}>
        <h1>Cart</h1>
        <table>
                <thead >
                    <th className={classes.heading}>Item</th>
                    <th className={classes.heading}>Price</th>
                    <th className={classes.heading}>Quantity</th>
                </thead>
           
        {cartElements.map((item)=>(
            <tr>
           <td className={classes.image}><img src={item.imageUrl} alt="" /></td> 
            <td><h3 className={classes.price}>{item.price}</h3></td>
            <td><p>{item.quantity}</p></td>
            </tr>
          
        ))}
         </table>
        <button onClick={props.onClose}>Close</button>

    </Modal>
  )
}

export default Cart
