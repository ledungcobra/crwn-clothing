import React from 'react'
import {connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartItem = ({toggleCartHidden}) =>{
    return <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
}
const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartItem);