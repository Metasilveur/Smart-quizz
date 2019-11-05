import React  from 'react'
import { Button } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from './logo.png';
import avatar from './avatar.png';

import './Toolbar.css'
import './App.css'
import HomeQuizz from './Home'
import StatsQuizz from './Stats'
import EnCoursQuizz from './En cours'
import ProfilQuizz from './Profil'
import CreationQuizz from './Creation'
import Classe31Quizz from './Classes/31'
import Classe32Quizz from './Classes/32'
import Classe33Quizz from './Classes/33'
import Classe34Quizz from './Classes/34'






const useStyles = makeStyles(theme => ({  

  toolbar:{
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)' //gris clair
    background: 'linear-gradient(45deg, #282c34 30%, #2F4F4F 90%)'
  },
 
  avatar: { //bouton profil
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    padding: '0 50px',

    position: 'absolute',
    top: 5, left: 1320, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rouge
    }
  },


  home: { //bouton home
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
    top: 5, left: 150, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },

  

  stats: { //bouton onglet
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
    top: 5, left: 320, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
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


const ToolbarQuizz = ({ match, location }) => {
   
  const classes = useStyles();

  return(

    <Router>
      <div className="app">
        <header className="app-header">              
          <AppBar className={classes.toolbar} position="static" >                
            <Toolbar>

              <img src={logo} 
                   style={{width: 110, height: 60, marginTop: 10}} 
                   alt="Logo"/>

              <Link to="/">
                <Button className={classes.home} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary"> 
                  <p>Home</p>
                </Button> 
              </Link>


              <Link to="/Stats">
                <Button className={classes.stats} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary">
                    <p>Mes stats</p>
                </Button>  
              </Link>

              {/*EnCoursQuizz.encours === "oui" &&*/}
              <Link to="/EnCours">
                  <Button className={classes.bencours}
                          variant="contained" 
                          color="primary">
                    <p>En cours</p>
                  </Button>
              </Link> 

                  
              <Link to="/Profil">
                <Button className={classes.avatar} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary">
                    <p>Mon profil</p>
                </Button> 
              </Link>

            </Toolbar>
          </AppBar>




          <Switch>
              
            <Route  exact path="/">
              <HomeQuizz/>
            </Route>

            <Route  path="/Stats">
              <StatsQuizz/>
            </Route>

            <Route  path="/EnCours">
              <EnCoursQuizz encours = "oui"/> 
            </Route>

            <Route  path="/Profil">
              <ProfilQuizz/>
            </Route>

            <Route  path="/Creation">
                <CreationQuizz/>
            </Route>

            <Route  exact path="/Classes/31">
                <Classe31Quizz/>
            </Route>

            <Route  exact path="/Classes/32">
                <Classe32Quizz/>
            </Route>

            <Route  exact path="/Classes/33">
                <Classe33Quizz/>
            </Route>

            <Route  exact path="/Classes/34">
                <Classe34Quizz/>
            </Route>

          </Switch>




        </header>  
      </div>  
    </Router>
  );
}


export default ToolbarQuizz
