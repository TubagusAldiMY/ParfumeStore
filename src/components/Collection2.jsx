import React from 'react'
import CardCollection from './CardCollection'

const Collection2 = () => {
    return (
        <section className="container-card-collection-2">
            <CardCollection isTop={false} title="Men's Collection" img="/hero-col.png" price="From 300$" />
            <CardCollection isTop={false} title="Men's Collection" img="/hero-col.png" price="From 300$" />
            <CardCollection isTop={false} title="Men's Collection" img="/hero-col.png" price="From 300$" />
            <CardCollection isTop={false} title="Men's Collection" img="/hero-col.png" price="From 300$" />
        </section>
    )
}

export default Collection2