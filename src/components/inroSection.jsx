import React from 'react'

// export default function IntroSection() {

//     return (
//         <section>
//             <h1 className="centered">IntroSection</h1>
//             <h3 className="centered" style={{ color: '#666' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, est dicta minima eveniet, repellendus delectus obcaecati aperiam cum dolore deleniti non iste assumenda ad laborum nobis! Aut est voluptatibus debitis.</h3>
//         </section>
//     )
// 

const e = React.createElement

export default function inroSection() {
    return e('section', null, [
        e('h1', { className: 'centered', key: 1 }, 'IntroSection'),
        e('h3',
            { className: 'centered', style: { color: '#666' }, key: 2 },
            'Lorem ...'),
    ])
}