import './Buttons.scss'

export default function Buttons({ children, onClick, isActive }) {

    let classes = 'button'

    if (isActive) classes += ' active'

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    )
} 