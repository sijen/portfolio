import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import sijen from '../../images/sijen.png'

const Home = () => {
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
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <span>
            <img src={sijen} alt="sijen" />
          </span>
          {/* <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br /> */}
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
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
