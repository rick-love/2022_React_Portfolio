import React, { useEffect, useState } from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'v', 'e']
  const jobArray = [
    't',
    'e',
    'c',
    'h',
    ' ',
    'c',
    'o',
    'n',
    's',
    'u',
    'l',
    't',
    'a',
    'n',
    't',
  ]
  // const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  // const jobArray = [
  //   'w',
  //   'e',
  //   'b',
  //   ' ',
  //   'd',
  //   'e',
  //   'v',
  //   'e',
  //   'l',
  //   'o',
  //   'p',
  //   'e',
  //   'r',
  //   '.',
  // ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Human / Nerd / Surfer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
