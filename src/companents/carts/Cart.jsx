import React from 'react'
import styles from './Cart.module.scss' 

const Cart = ({item}) => {
  return (
    <div>
        <img src={item.image} className={styles.img} alt="" />
        <span>{item.title}</span>
        <span>{item.price}</span>
    </div>
  )
}

export default Cart