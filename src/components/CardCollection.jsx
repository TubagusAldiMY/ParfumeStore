import React from 'react'

function CardCollection({ title, img, isTop = true, price }) {
    if (!isTop) {
        return (
            <div className='card-collection'>
                <img src={img} alt="sadf" />
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        )
    }
    return (
        <div className='card-collection'>
            <h3>{title}</h3>
            <img src={img} alt="sadf" />
        </div>
    )
}

export default CardCollection
