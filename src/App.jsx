import './App.scss'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Buttons from './components/Buttons/Buttons'
import { ways, differences } from './data'
import { useState } from 'react' //usestate is hook, create a local state for the component



export default function App() {

  const [content, setContent] = useState('Hello World')


  // let content = 'Hello World'


  function handleClick(type) {
    // content = type
    setContent(type)

  }

  return (
    <div>

      <Header />
      <Header />
      <main>
        <section>

          <h1>Hello React !!!</h1>

          <ul>
            <WayToTeach title={ways[0].title}
              description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>H3</h3>
          <Buttons onClick={() => handleClick('way')}> Proba 1</Buttons>
          <Buttons onClick={() => handleClick('easy')}> Proba 2</Buttons>
          <Buttons onClick={() => handleClick('program')}> Proba 3</Buttons>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div >
  )
}


