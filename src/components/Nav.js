import React, { useEffect, useState } from 'react'
import '../css/Nav.css'
import logo from '../media/netflixlogo.png'
import avatar from '../media/netflixavatar.png'


function Nav() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className='nav__logo'
                src={logo}
                alt='Netflix logo'
            />
            <img
                className='nav__avatar'
                src={avatar}
                alt='Avatar'
            />
        </div>
    )
}

export default Nav
