import Buttons from '../Buttons/Buttons'
import { useState } from 'react'


export default function Second() {

    return (

        <section>

            <h3>H3</h3>

            <Buttons onClick={() => handleClick('way')}> Proba 1</Buttons>
            <Buttons onClick={() => handleClick('easy')}> Proba 2</Buttons>
            <Buttons onClick={() => handleClick('program')}> Proba 3</Buttons>


        </section>

    )
}