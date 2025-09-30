import Navbar from '../Layout/Navbar'
import Skills from '../Components/Skills'
import Footer from '../Layout/Footer'
import Learning from '../Components/Learning'

const SkillsPage = () => {
  return (
    <div>
      <Navbar linkColor='text-black'/>
      <div className='p-15'>
      <Skills/>
      <Learning/>
      </div>
      <Footer/>
    </div>
  )
}

export default SkillsPage
