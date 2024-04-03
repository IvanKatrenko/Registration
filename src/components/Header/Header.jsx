import logo from '/img/logo.png'
import { useEffect, useState } from 'react';
import './Header.scss';
// import { styled } from 'styled-components';

// const HeaderContainer = styled.header`
//     height: 50px;
//     display: flex;
//     padding: 0 2rem;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid #e873cf;   
//     background: #e9a4f2;
// `

export default function Header() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1500)

        return () => {
            clearInterval(interval)
        }

    }, [])


    return (
        <HeaderContainer>

            {/* <img src={logo} alt="Logo" className='logo' /> */}

            <span>time now: {new Date().toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}