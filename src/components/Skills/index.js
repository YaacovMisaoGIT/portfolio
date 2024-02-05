import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faNodeJs,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { imgData, imgData2 } from "./data"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's ', '', '&', '', 'E', 'x', 'p', 'e', 'r ','i', 'e', 'n', 'c', 'e', ]}
              idx={15}
            />
          </h1>
          <p>
            I play diiferent roles as from a developer to a software tester.
            My experienced included building cloned e-commerce sites with all
            functionalities and all necessary requirements requires of an informational car sales site. 
            All roles of a developer such as building the REST framework for the server/backend and 
            working on the front-end using mostly React.js and visual studio code. 
          </p>

          <p>
          • Design of the system architecture from scratch as fully cloud native application built with 
            microservices
          <p>
          • Exploration and integration of new technologies 

          </p>
          </p>
          {/* <p>
          • Technology stack:
            JavaScript
            React
            Express
            Node
            HTML/CSS
            Sass
            NoSQL(MongoDB)
            PostgresSQL
            Firebase
            SQL
            Postman
            Git
            JIRA 
          </p> */}
      
        </div>

        <div className="images-logo">
        <ul>
          {imgData.map((item) => (
            <li >
              <img src = {item.src} className='custom-image'/>
              <p className='img-title'> {item.title} </p>
            </li>
          ))}
        </ul>

        <ul>
          {imgData2.map((item) => (
            <li >
              <img src = {item.src} className='custom-image'/>
              <p className='img-title'> {item.title} </p>
            </li>
          ))}
        </ul>
     

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

