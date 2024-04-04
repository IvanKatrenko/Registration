import { useEffect, useState, useCallback } from "react";
import Buttons from "../Buttons/Buttons";
import { } from 'react-dom'
import useInput from "../../hooks/useInput";


export default function Modal() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])


    // вызываем этой ф-ции
    useEffect(() => {
        // запрос на сервер, не вызываем этой ф-ции
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h1>Modal</h1>

            <Buttons style={{ marginBottom: '2rem' }} onClick={() => setModal(true)}>
                Open information
            </Buttons>

            <modalComponent>
                <h3>Hello from modal</h3>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime dolorum inventore, laboriosam magni natus. Eum, libero veniam? Excepturi nobis inventore, laboriosam quisquam repellendus ducimus ex dolor fugiat iure accusantium.
                </p>

                <Buttons onClick={() => setModal(false)}>
                    Close modal
                </Buttons>
            </modalComponent>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input type="text" className="control" {...input} />
                    <ul>
                        {users
                            .filter((user) => (
                                user.name.toLowerCase().includes(input.value.toLowerCase())
                            )
                                .map((user) =>
                                    < li key={user.id} > {user.name} </li>
                                ))}
                        {/* то что полетит в jsx находиться в input */}
                    </ul>
                </>
            )}
        </section >
    )
}