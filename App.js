import React, { Component} from 'react'
import { Button, Card, Row, NavLink  } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import ToolbarAlex from './Toolbar'



class App extends Component {

   render() {

    return ( 

     <div className="app">
       
        <ToolbarAlex/>
      </div>
    )  
  }
}









export default App