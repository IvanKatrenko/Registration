import classes from './Buttons.module.scss'

export default function Buttons({ children, onClick, isActive }) {

    let classes = 'button'

    if (isActive) classes += ' active'

    return (
        <button
            className={
                isActive ? `${classes.button} ${classes.active}` : classes
            }
            onClick={onClick}
        >
            {children}
        </button>
    )
} 