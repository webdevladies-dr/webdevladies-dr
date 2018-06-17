import React, { Component } from 'react'
import axios from 'axios'
// import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Projects.css'


class Projects extends Component {
  constructor() {
    super()
    this.state = {

      fullCurriculum: [],
      shortCurriculum: [],
      currentView: 'shortCurriculum',
    }
  }

  componentDidMount = () => {
    axios.all([this.getFullCurriculum(), this.getShortCurriculum()])
        .then(axios.spread( (full, short) => {
          this.setState({

            fullCurriculum: full.data,
            shortCurriculum: short.data
          })

        }))
        .catch(err => console.log(err))
      }

      getFullCurriculum() {
        return axios.get("./assets/fullCurriculum.json")
      }

      getShortCurriculum() {
        return axios.get("./assets/shortCurriculum.json")
      }

      changeView= () => {
        if(this.state[this.state.currentView].length == 8) {
          this.setState({
            currentView: 'fullCurriculum'
          })
        } else {
          this.setState({
            currentView: 'shortCurriculum'
          })
        }
      }

      render () {
        return (
          <div>
            <RaisedButton
              className='action-button'
              type="text"
              onClick={this.changeView}
              label="Full Curriculum"
            />
            <RaisedButton
              className='action-button'
              type="text"
              onClick={this.changeView}
              label="Short Curriculum"
            />
            <hr />
          <div className="Projects" id='projects'>
          {this.state[this.state.currentView].map( (project, index) => {
            return (
              <MuiThemeProvider key={index}>
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
              )
            }
          )}
        </div>
        </div>
        )
      }
  }

export default Projects
