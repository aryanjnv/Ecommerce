import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../Context/cart-context'
import Store from '../Store/Store'

const Cart = (props) => {
    const cartContext=useContext(CartContext)
    let totalAmount=0

    const removeItemHandler=(item)=>{
     cartContext.removeItem(item)
    }
    cartContext.items.forEach((item)=>{
        totalAmount+=item.price
    })
    const purchaseHandler=()=>{
        alert('Thanks for purchase')
        cartContext.cartBlank()
    }
   
  return (
    <>
    <Modal onClose={props.onClose}>
        <h1>Cart</h1>
        <table>
                <thead >
                    <th className={classes.heading}>Item</th>
                    <th className={classes.heading}>Price</th>
                    <th className={classes.heading}>Quantity</th>
                </thead>
           
        {cartContext.items.map((item)=>(
            <tr>
           <td className={classes.image}><img src={item.imageUrl} alt="" />{item.album}</td> 
            <td><h3 className={classes.price}>${item.price}.00</h3></td>
            <td><p>{item.quantity}</p> <br/>
            <button className={classes.remove} onClick={()=>removeItemHandler(item)}>Remove</button></td>
            </tr>
          
        ))}
         </table>
         <h3 className={classes.amount}>Total Amount: ${totalAmount}</h3>
       { totalAmount? <button onClick={purchaseHandler} className={classes.close}>Purchase</button>:''}
        <button onClick={props.onClose} className={classes.close}>Close</button>

    </Modal>
   
    </>
  )
}

export default Cart