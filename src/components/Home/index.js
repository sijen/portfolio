import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import About from '../About';
import Contact from '../Contact';
import sijen from '../../images/sijen.png'

const Home = () => {
    return (
    <><Hero/>
    <About/>
    <Contact/>
    </>
  )
}

const Hero = ()=>{
  const [letterClass] = useState('text-animate')
  // const nameArray = ['S', 'i', 'j', 'e', 'n']

  const jobArray = [
    'S',
    'e',
    'c',
    'u',
    'r',
    'i',
    't',
    'y',
    ' ',
    'A',
    'n',
    'a',
    'l',
    'y',
    's',
    't',
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  return(<div className="container home-page" id="homeSection">
    <div className="text">
      <h1>
        <span className={letterClass}>Sijen </span>
        <span className={`${letterClass} _12`}>&nbsp;Dangol</span>
      </h1>
      <h2>
      <AnimatedLetters
          letterClass={letterClass}
          strArray={jobArray}
          idx={10}
        />
      </h2>
      
      <button className="flat-button" onClick={scrollToContact}>
        CONTACT ME
      </button>
    </div>
    <div className='picture'><img src={sijen} alt="sijen" /></div>
  </div>)
}
export default Home
