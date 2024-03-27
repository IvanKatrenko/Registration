import './Buttons.scss'

export default function Buttons({ children, onClick }) {

    return (
        <button
            className='button active'
            onClick={onClick}
        >
            {children}
        </button>
    )
} 