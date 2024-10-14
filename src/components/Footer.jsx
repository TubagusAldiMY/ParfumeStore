import React from 'react'

const Footer = (props) => {
    const { title } = props
    return (
        <section className="footer">
            <h2>{title}</h2>
        </section>
    )
}

export default Footer