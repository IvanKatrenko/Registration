import classes from './Buttons.module.scss'

export default function Buttons({ children, isActive, ...props }) {

    let classes = 'button'

    if (isActive) classes += ' active'

    return (
        <button
            {...props}
            className={
                isActive ? `${classes.button} ${classes.active}` : classes
            }
        >
            {children}
        </button>
    )
} 