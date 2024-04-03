import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { } from 'react-dom'


export default function Modal() {

    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <section>
            <h1>Modal</h1>

            <Buttons onClick={() => setModal(true)}>
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
        </section>
    )

}