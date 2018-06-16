import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Projects.css'

const projects = [{
    title: '1. Portfolio or Storefront Website',
    image: './assets/images/project-images/continental-phil-tube.png',
    description: 'Build and deploy a responsive, mobile-ready website.',
    tech: 'HTML5, CSS, Bootstrap, Atom, Gitbash/Terminal, Github'
  },
  {
    title: '2. Let\'s Play',
    image: './assets/images/project-images/pdx-tech-hub.png',
    description: 'Build an online quiz or quote generator game to practice your JavaScript skills.',
    tech: 'JavaScript, jQuery'
  },
  {
    title: '3. Use an API',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Consume data from a third party API and deliver it to your user.',
    tech: 'Postman, API'
  },
  {
    title: 'Front-End Capstone',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Work with at least one other person to develop a beautiful, interactive, responive front-end project.',
    tech: 'HTML5, CSS, Bootstrap, JavaScript, jQuery, API, Pair-programming'
  },
  {
    title: '4. Node',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Build a simple command-line application with Node.js.',
    tech: 'Node.js, NPM, Inquirer.js'
  },
  {
    title: '5. Simple React App',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Build a basic React application using the create-react-app NPM package.',
    tech: 'React, create-react-app, Material-UI'
  },
  {
    title: '6. Firebase Project',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'See how it easy it is to build a serverless full-stack application with user authentication with Firebase and React.',
    tech: 'Firebase'
  },
  {
    title: 'Full-Stack Capstone',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'You will work with at least two other person to put together a full-stack application website of your choosing.',
    tech: 'HTML5, CSS, Bootstrap, JavaScript, React, Firebase'
  }
]

const ProjectsMicro = () => {
  return (
      <div className="Projects" id='projects'>
        {projects.map( (project, index) => {
          return <MuiThemeProvider key={index}>
            <Card className='project'>
              <CardHeader
                title={project.title}
                subtitle={project.description}
                // avatar="./assets/images/alfonsotech-logo.png"
              />
              <CardText>
                {/* <a href={project.deploy} target="_blank" rel="noopener noreferrer"><img className="project-image" src={project.image} alt={project.title} /></a> */}
                <hr />
                <div className="project-links">
                  <p>{project.tech}</p>
                  {/* <a href={project.deploy} target="_blank" rel="noopener noreferrer"><FlatButton label="Live" /></a>
                  <br />
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FlatButton label="Code" /></a> */}
                </div>
              </CardText>
            </Card>
          </MuiThemeProvider>
        })}
      </div>
  )
}

export default ProjectsMicro
