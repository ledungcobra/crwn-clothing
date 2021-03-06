import React from 'react'
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'

import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
//Selector for caching
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch})=>{
    return <div className="cart-dropdown">
        <div className="cart-items">
            {   cartItems.length?
                cartItems.map(item=>(<CartItem key={item.id} item={item} />))
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        {/* push to redirect\ */}
        <CustomButton onClick={()=>
        {
            history.push('/checkout')
            dispatch(toggleCartHidden());
        }
        }>GO TO CHECKOUT</CustomButton>
    </div>
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
})
//Wrap to withRouter to actually access the history
export default withRouter(connect(mapStateToProps)(CartDropdown))