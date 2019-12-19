import React from 'react';

import './form-input.style.scss';

const FormInput = ({ label, changeHandler, ...remainingProps }) => {
    return (
        <div className='form-input-container'>
            <input className='form-input' onChange={changeHandler} {...remainingProps} />
            {
                label ?
                    <label className={(remainingProps.value.length ? 'shrink' : '')+ ' form-input-label' } {...remainingProps}>{label}</label> : null
            }
        </div>
    )
}

export default FormInput;