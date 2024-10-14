import './App.css'
import Collection from './components/Collection'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Collection2 from './components/Collection2'
import Footer from './components/Footer'

function App() {

  return (
    <main>
      <Nav />
      <Hero img="/bg-hero.png" />
      <Collection />
      <Hero isText={false} img="/bg-hero-2.png" />
      <Collection2 />
      <Footer title="TUBSAMY EXCLUSIVE" />
    </main>

  )
}

export default App
