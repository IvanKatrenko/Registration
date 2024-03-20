import './App.scss'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Buttons from './components/Buttons/Buttons'
import { ways } from './data'



export default function App() {
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
          <Buttons> Proba 1</Buttons>
          <Buttons> Proba 2</Buttons>
        </section>
      </main>
    </div >
  )
}


