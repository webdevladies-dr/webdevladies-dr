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
      label: '',
      fullCurriculum: [],
      shortCurriculum: [],
      currentView: 'shortCurriculum',
    }
  }

  componentDidMount = () => {
    axios.all([this.getFullCurriculum(), this.getShortCurriculum()])
        .then(axios.spread( (full, short) => {
          this.setState({
            label: 'See Full Curriculum',
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
        if(this.state.label === 'See Full Curriculum') {
          this.setState({
            currentView: 'fullCurriculum',
            label: 'See Short Curriculum'
          })
        } else {
          this.setState({
            currentView: 'shortCurriculum',
            label: 'See Full Curriculum'
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
              label={this.state.label}
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
