import logo from '/img/logo.png'
import { useState } from 'react'
import './Header.module.scss'

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1500)

    return (
        <header className='header'>

            {/* <img src={logo} alt="Logo" className='logo' /> */}

            <span>time now: {new Date().toLocaleTimeString()}</span>
        </header>
    )
}