import React from 'react'
import { navbarList } from '../libs/navbar'
import Button from './Button';

function Nav() {
    const navList = navbarList;
    return (
        <section className='container-header'>
            <h1>TUBSAMY EXCLUSIVE</h1>
            <nav className='container-nav'>

                {navList.map((item, index) => {
                    return <a key={index} href="">{item}</a>
                })}
            </nav>
            {/* <a href="">Login</a> */}
            <Button title="Login" />
        </section>
    )
}

export default Nav
