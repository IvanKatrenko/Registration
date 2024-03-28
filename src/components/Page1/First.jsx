import React from 'react'
import { ways } from '../../data'
import WayToTeach from '../WayToTeach'

export default function First() {
    return (
        <section>
            <ul>

                {ways.map((way) => {

                    return <WayToTeach key={way.title} {...way} />
                })}

            </ul>
        </section>
    )
}