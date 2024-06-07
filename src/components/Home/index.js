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
    ' ',
    'C',
    'y',
    'b',
    'e',
    'r',
    ' ',
    'G',
    'u',
    'a',
    'r',
    'd',
    'i',
    'a',
    'n',
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  return(<div className="container home-page" id="homeSection">
    <div className="text">
      <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m </span>
        <span>
          
        </span>
        
        <AnimatedLetters
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
        />
      </h1>
      <h2>
        your dedicated protector in the digital world, constantly exploring
        inventive ways to keep your online domain safe.
      </h2>
      <button className="flat-button" onClick={scrollToContact}>
        CONTACT ME
      </button>
    </div>
    <div className='picture'><img src={sijen} alt="sijen" /></div>
  </div>)
}
export default Home
