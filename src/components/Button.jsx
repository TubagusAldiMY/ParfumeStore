import React from 'react'

const Button = (props) => {
    const { title } = props;
    return (
        <button className='btn-login'>{title}</button>
    )
}

export default Button