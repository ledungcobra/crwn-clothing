import React from 'react'
import './checkout-item.style.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem,decreaseQuantityItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem,removeItem,increaseQuantityItem,decreaseQuantityItem})=>{
    const {name,imageUrl,price,quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                    <div className="arrow" onClick={()=>decreaseQuantityItem(cartItem)} >&#10094;</div> 
                    <div className="value">{quantity}</div> 
                    <div className="arrow" onClick={()=>increaseQuantityItem(cartItem)} >&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>removeItem(cartItem)} >&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    removeItem: item=> dispatch(clearItemFromCart(item)),
    increaseQuantityItem: item => dispatch(addItem(item)),
    decreaseQuantityItem: item => dispatch(decreaseQuantityItem(item)),

})
export default connect(null,mapDispatchToProps)(CheckoutItem);

