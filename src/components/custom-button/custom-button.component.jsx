import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, googleSignInButton, buttonAction, ...remainingProps }) => {
    return (
        <button className={(googleSignInButton ? 'google-sign-in' : '') + ' custom-button'} onClick={buttonAction} {...remainingProps}>
            {children}
        </button>
    )
}

export default CustomButton;