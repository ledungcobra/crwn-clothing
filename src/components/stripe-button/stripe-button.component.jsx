import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price *100 ;
    const publishableKey = 'pk_test_51HRZcPAdQ6KzwK07GNoDOEPb6T820P30Qt07zoq1E0knEFsiVioX8oIpdh4xhD9YaM4AB81W7OD6EMjbg0xufW6W00XwOrKKbo';
    const onToken = token=>{
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label="Pay now"
            name="CRWN Cloting"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLable='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton