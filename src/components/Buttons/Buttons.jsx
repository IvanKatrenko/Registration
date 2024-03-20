import './Buttons.scss'

export default function Buttons({ children }) {
    return (
        <button className='button'>Click</button>,
        <button className='button active'>{children}</button>
    )
}