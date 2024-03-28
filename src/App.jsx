import './App.scss'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Buttons from './components/Buttons/Buttons'
import { ways } from './data'
import { useState } from 'react' //usestate is hook, create a local state for the component



export default function App() {

  const [contentType, setContentType] = useState(null)




  function handleClick(type) {
    // content = type
    setContentType(type)

  }

  return (
    <div>

      <Header />
      <Header />
      <main>
        <section>

          {/* <h1>Hello React !!!</h1> */}

          <ul>

            {ways.map((way) => {

              return <WayToTeach key={way.title} {...way} />
            })}
            {/* <WayToTeach title={ways[0].title}
              description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} /> */}
          </ul>
        </section>
        <section>
          <h3>H3</h3>
          <Buttons onClick={() => handleClick('way')}> Proba 1</Buttons>
          <Buttons onClick={() => handleClick('easy')}> Proba 2</Buttons>
          <Buttons onClick={() => handleClick('program')}> Proba 3</Buttons>

          {/* {contentType ? (
            <p>{differences[contentType]}</p>)
            :
            (null)} */}

          {/* {!contentType ? (
            <p>{differences[contentType]}</p>)
            :
            null}

          {!contentType && <p>{differences[contentType]}</p>}

          {tabContent} */}
        </section>
      </main>
    </div >
  )
}


