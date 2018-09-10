import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import teal from '@material-ui/core/colors/teal'
import deepPurple from '@material-ui/core/colors/deepPurple'
import NavBar from './components/base/NavBar'
import TodoContainer from './components/todo/TodoContainer'

class App extends Component {

  theme = createMuiTheme({
    palette:{
      primary: teal,
      secondary: deepPurple
    }
  })

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme = {this.theme}>
          <NavBar/>
          <TodoContainer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
