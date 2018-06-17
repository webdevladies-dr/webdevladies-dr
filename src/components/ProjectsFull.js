import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const projects = [{
    title: '1. Tribute Webpage',
    image: '',
    description: 'Build a single-page, static website that incorporates visual media.',
    tech: 'HTML5, CSS, Chrome Web Developer Tools'
  },{
    title: '2. Portfolio or Storefront Website',
    image: '',
    description: 'Build and deploy a responsive, mobile-ready website.',
    tech: 'HTML5, CSS, Bootstrap, Atom, Gitbash/Terminal, Github'
  },{
    title: '3. Let\'s Play Javascript',
    image: './assets/images/blue-line.png',
    description: 'Build an online quiz or quote generator game to practice your JavaScript skills.',
    tech: 'JavaScript, jQuery'
  },{
    title: '4. Quote Generator',
    image: '',
    description: 'Build an application that will deliver as many quotes as the user requests, on a theme of your liking.',
    tech: 'more Javascript, jQuery'
  },
  {
    title: '5. Two-Player Board Game',
    image: '',
    description: 'Build a board game where players take turns making moves and scoring points.',
    tech: 'more JavaScript and jQuery, Canvas'
  },
  {
    title: '6. Use an API',
    image: '',
    description: 'Consume data from a third party API and deliver it to your user.',
    tech: 'Postman, API'
  },
  {
    title: 'Capstone: Front-End',
    image: '',
    description: 'Work with at least one other person to develop a beautiful, interactive, responive front-end project.',
    tech: 'HTML5, CSS, Bootstrap, JavaScript, jQuery, API, Pair-programming'
  },
  {
    title: '7. Node',
    image: '',
    description: 'Build a simple command-line application.',
    tech: 'Node.js, NPM (Node Package Manager), Inquirer.js'
  },
  {
    title: '8. Server-up!',
    image: '',
    description: 'Build your first back-end server using Express.',
    tech: 'Express'
  },
  {
    title: '9. Back-End Templating',
    image: '',
    description: 'Learn the principles of D.R.Y. by implemenintg some server-side templating.',
    tech: 'Handlebars'
  },
  {
    title: '10. Create & Read Routes',
    image: '',
    description: 'Set up your first database using Mongo and write your first two routes.',
    tech: 'Mongo'
  },
  {
    title: '11. Full CRUD App',
    image: '',
    description: 'CRUD stands for create, read, update, and delete. Continue to learn about routing by building out a full API',
    tech: 'Mongo/Mongoose'
  },
  {
    title: '12. Full-Stack Application with Log-In',
    image: '',
    description: 'Add log-in funcitonality to a full stack MERN application.',
    tech: 'Passport.js, oAuth'
  },
  {
    title: '13. Simple React App',
    image: '',
    description: 'Build a basic React application using create-react-app.',
    tech: 'React, create-react-app, Material-UI'
  },
  {
    title: '14. Firebase Project',
    image: '',
    description: 'See how it easy it is to build a serverless full-stack application with user authentication with Firebase and React.',
    tech: 'Firebase'
  },
  {
    title: 'Capstone: Full-Stack',
    image: '',
    description: 'You will work with at least two other people to put together a full-stack application website of your choosing.',
    tech: 'HTML5, CSS, JavaScript, Node.js/Express, Handlebars or React, Mongo/Mongoose, Passport.js'
  }
]

const ProjectsFull = () => {
  return (
      <div className="Projects" id='projects'>
        {projects.map( (project, index) => {
          return <MuiThemeProvider key={index}>
            <Card className='project'>
              <CardHeader
                title={project.title}
                subtitle={project.description}
              />
              <CardText>

                <hr />
                <div className="project-links">
                  <p>{project.tech}</p>
                </div>
              </CardText>
            </Card>
          </MuiThemeProvider>
        })}
      </div>
  )
}

export default ProjectsFull
