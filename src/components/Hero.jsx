import React from 'react'

function Hero({ isText = true, img }) {
    if (!isText) {
        return (
            <section className="container-hero-2">
                <img src={img} alt="asda" />
            </section>)
    }
    return (
        <section className='container-hero'>
            <img src={img} alt="sdfsf" />
            <div className='hero-text'>
                <p>Feel the exclusive fragrance</p>
            </div>
        </section>
    )
}

export default Hero

