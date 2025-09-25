import './App.css'
import Aboutme from './Components/AboutMe/Aboutme'
import Description from './Components/Description/Description'
import Herosection from './Components/HeroSection/Herosection'
import Learning from './Components/Learning/Learning'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Navbar from './Layout/Navbar'

function App() {

  return (
    <div className='h-screen bg-[var(--color-secondary)]'>
    <Navbar/>
    <Herosection/>
    <Description/>
    <Aboutme/>
    <Skills/>
    <Learning/>
    <Portfolio/>
    </div>
  )
}

export default App
