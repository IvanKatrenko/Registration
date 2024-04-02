import Buttons from './Buttons'

export default function tabsSection({ active, onChange }) {

    return (
        <section style={{ marginBottom: '2rem' }}>
            <Buttons isActive={active === 'home'}
                onClick={onChange('home')}>Home</Buttons >
            <Buttons isActive={active === 'about'}
                onClick={onChange('about')}>About me</Buttons>
            <Buttons
                isActive={active === 'notes'}
                onClick={onChange('notes')}>My notes
            </Buttons>
            <Buttons
                isActive={active === 'efect'}
                onClick={onChange('notes')}>My notes
            </Buttons>
        </section>
    )
}