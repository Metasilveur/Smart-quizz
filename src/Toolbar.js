import React, { Component} from 'react'
import { Button, Card, Row, NavLink  } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Toolbar.css'
import './App.css'
import logo from './logo.png';
import avatar from './avatar.png';




const useStyles = makeStyles(theme => ({
 
 avatar: { //bouton avatar
    background: 'linear-gradient(45deg, #696969 30%, #C0C0C0 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    padding: '0 50px',
    margin: 10,
    marginLeft:theme.spacing(90),
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
        transform: "scale(1.1)",
        //background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rouge
        //transform: "rotate(180deg)",
         background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)',
      }
  },


   onglet: { //bouton onglet
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #696969 30%, #C0C0C0 90%)',
    border: 10,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width : 180,
    padding: '0 50px',
    margin: 10,
    marginLeft:theme.spacing(1),
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    
    "&:hover": {
        transform: "scale(1.1)",
        //transform: "rotate(180deg)",
        background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)',
      }
  },


    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',

  },

  title: {
    fontWeight: 'bold',
    color: 'black',
  },

  bar:{
    
     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'

  },


}));
 

const ToolbarAlex = ({ match, location }) => {
 
  const classes = useStyles();


      return(


        <div className="app">
           <header className="app-header">
            
            <AppBar className={classes.bar} position="static" >
              
              <Toolbar>

                <img src={logo} 
                     style={{width: 110, height: 60, marginTop: 10}} 
                     alt="Logo"/>

                 <Button className={classes.onglet} 
                         shape="chubby" 
                         variant="contained" 
                         color="primary">
                    <p>Home</p>
                  </Button> 

                 <Button className={classes.onglet} 
                         shape="chubby" 
                         variant="contained" 
                         color="primary">
                    <p>Mes stats</p>
                  </Button> 

                 <Button className={classes.onglet} 
                         shape="chubby" 
                         variant="contained" 
                         color="primary">
                    <p>En cours (!)</p>
                  </Button>



                  <Button className={classes.avatar} 
                         shape="chubby" 
                         variant="contained" 
                         color="primary">
                     <p>Mon profil</p>
                  </Button>

              </Toolbar>
            </AppBar>
          </header>  
        </div>  
      );
}


export default ToolbarAlex
