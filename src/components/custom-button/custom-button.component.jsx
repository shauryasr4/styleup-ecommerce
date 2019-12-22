import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, googleSignInButton,...remainingProps}) => {
    return (
        <button className={(googleSignInButton? 'google-sign-in':'') +' custom-button'} {...remainingProps}>
            {children}
        </button>
    )
}

export default CustomButton;