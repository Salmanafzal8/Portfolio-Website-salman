import './App.css'
import Aboutme from './Components/AboutMe/Aboutme'
import Description from './Components/Description/Description'
import Herosection from './Components/HeroSection/Herosection'
import Navbar from './Layout/Navbar'

function App() {

  return (
    <div className='h-screen bg-[var(--color-secondary)]'>
    <Navbar/>
    <Herosection/>
    <Description/>
    <Aboutme/>
    </div>
  )
}

export default App
