import React from 'react'
import CardCollection from './CardCollection'

const Collection = () => {
    return (
        <section className='hero-collection'>
            <h2>Explore the best selection of creations</h2>
            <div className='container-hero-collection'>
                <CardCollection title="Men's Collection" img="/hero-col.png" />
                <CardCollection title="Men's Collection" img="/hero-col-1.png" />
            </div>
        </section>
    )
}

export default Collection