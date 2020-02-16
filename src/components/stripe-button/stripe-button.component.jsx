import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const amountForStripe = 1000*price;
    const publishableKey = 'pk_test_V0bVMJJGQHInfKKprbxDSiLq00kmQSV9Qx';

    const onProcess = token => {
        console.log('token is ', token);
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Ecom'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={amountForStripe} 
        panelLabel='Pay Now'
        token={onProcess}
        stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;