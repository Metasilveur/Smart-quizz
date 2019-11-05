import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      display: 'flex',
      marginTop: '100px',
    },

    toolbar:{
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)' //gris clair
    background: 'linear-gradient(45deg, #282c34 30%, #2F4F4F 90%)'
  },

   bencours: { //bouton encours
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 10,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width : 150,
    padding: '0 50px',

    position: 'absolute',
    top: 5, left: 490, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },
}));



const EnCoursQuizz = ({ match, location, encours }) => {
   
  const classes = useStyles();

    return(

      <div className="app">
            <header className="app-header">
              
              <div className={classes.ecriture}>
                  {encours === 'oui' ? <p>QUIZZ EN COURS...</p> : <p>PAS DE QUIZZ EN COURS</p> }

              </div>

            </header>  
        </div>  
    );
}




EnCoursQuizz.propTypes = {
  encours: PropTypes.oneOf([
      'oui',
      'non',
    ]).isRequired,
}




export default EnCoursQuizz
