import './App.css'
import Herosection from './Components/HeroSection/Herosection'
import Navbar from './Layout/Navbar'

function App() {

  return (
    <div className='h-screen bg-[var(--color-secondary)]'>
    <Navbar/>
    <Herosection/>
    </div>
  )
}

export default App
