import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aut,
          neque pariatur odit asperiores minus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus
          placeat, minus sit, vel nam molestias impedit ipsam quod non amet
          facilis consequatur dolores accusamus quibusdam ea. Fugit,
          praesentium. Enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          dignissimos?
        </p>
      </div>
    </div>
  )
}

export default About
