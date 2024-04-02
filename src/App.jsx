import './App.scss'
import Header from './components/Header/Header'
import { useState } from 'react' //usestate is hook, create a local state for the component
import First from './components/Page1/First.jsx'
import Second from './components/Page2/Second'
import IntroSection from './components/inroSection'
import Feedback from './components/Feedback'



export default function App() {

  const [tab, setTab] = useState('modal')

  return (
    <div>
      <Header />
      <main>
        <IntroSection />

        <tabsSection
          active={tab}
          onChange={(current) => setTab(current)} />
        {/* // tabsSection is a function that click to (first and second) or feedbacks */}
        {tab === 'main' && (
          <>
            <First />
            <Second />
          </>
        )}

        {tab === 'feedback' && <Feedback />}

        {tab === 'effecrt' && <Modal />}

      </main>
    </div >
  )
}


