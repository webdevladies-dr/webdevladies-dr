import React, { Component } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import {Card, CardHeader, CardText} from 'material-ui/Card'
// import RaisedButton from 'material-ui/RaisedButton'
import About from './components/About'
import Projects from './components/Projects'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Testimonials from './components/Testimonials'

import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
        {/* <Navigation /> */}
        <h2>LEARN TO CODE FROM SCRATCH</h2>
        <Card className='learn'>
          <CardHeader
            // title="Hello, I'm Rita Alfonso."
            // subtitle="Full Stack Web Developer & Educator"
            // avatar="./assets/images/logo-me.jpg"
          />
          <CardText>

            <h4><strong>Project-based curriculum, just-in-time learning, learn by teaching</strong></h4>
            <ul>
              <li>♛ You will build Projects. Lots of them. So you will end up with some great portfolio pieces!</li>
              <li>♛ You will learn what you need to learn when you need to use it. No redundancy or wasted energy.</li>
              <li>♛ Learn by teaching - share your knowledge, build your confidence.</li>
            </ul>
          </CardText>
        </Card>
        <h2>WHAT YOU WILL BUILD</h2>
        <Projects />
        <h2>ABOUT YOUR TEACHER</h2>
        <About />

        <Footer />
        </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
