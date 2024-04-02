import { useState, useRef } from "react"
import Buttons from "./Buttons/Buttons"

function StateVsRef() {
    const input = useRef()
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h1>Input value: {show && input.current.value}</h1>
            <input type="text"
                ref={input}
                className="control"
                value={value}
                onKeyDown={handleKeyDown}
                onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default function Feedback() {

    const [form, setForm] = useState({
        name: '',
        description: '',
        reason: '3'
    })
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState('3')

    function handleNameChange(e) {
        // setName(e.target.value)
        // setHasError(name.trim().length === 0)
        setForm(prev => {
            return {
                ...prev,
                name: e.target.value,
                hasError: e.target.value.trim().length === 0

            }
        })
        setForm({
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
            reason: form.reason

        })
    }

    function toggleError() {
        setHasError((prev) => !prev)
        // setHasError(!hasError)

    }

    return (
        <section>
            <h1>Feedback</h1>

            <Buttons onClick={toggleError}>Toggle Error</Buttons>

            <form>
                <label htmlFor="name">Your bane</label>
                <input type="text"
                    id='name'
                    placeholder="Title"
                    className="control" />

                <label htmlFor="description"></label>
                <input type="text"
                    id='description'
                    placeholder="Description"
                    className="control"
                    value={name}
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                    }}
                    onChange={handleNameChange} />

                <label htmlFor="reason">Dlaczego zwracamy się</label>
                <select id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(e) => setForm(prev => ({ ...prev, reason: e.target.value }))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                {/* <pre> */}
                {/* Name : {form.name}
                    <br />
                    Reason : {form.reason} */}
                {/* {JSON.stringify(form, null, 2)} */}
                {/* </pre> */}

                <Buttons className="button" disabled={form.hasError} isActive={!form.hasError}> Sent !</Buttons>


                <StateVsRef />
            </form>
        </section>
    )
}   