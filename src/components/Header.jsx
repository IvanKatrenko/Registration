import logo from '/img/logo.png'
export default function Header() {
    const now = new Date()
    return (
        <header className='header'>

            <img src={logo} alt="Logo" />
            <span>time now: {new Date().toLocaleTimeString()}</span>
        </header>
    )
}