import React from 'react';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import { borders } from '@material-ui/system';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { sizing } from '@material-ui/system';
import logo from './logo.png';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {

    marginTop: theme.spacing(4),
    height: 190,
    width: 205,
    background: '#282c34',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: 240,
    flexShrink: 0,

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    background: '#2E3B55',
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  avatar: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 60,
    marginTop: theme.spacing(3),
  },
  quzz: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 120,
    padding: '0 100px',
    margin: 10,
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
        
        transform: "scale(1.1)",
        //transform: "rotate(180deg)",
        
        background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)',
      }
  },
  media: {


  },
}));


const Qcm = () => {

  const classes = useStyles();

  return (
        <div className="App">
          <header className="App-header">

        <div className={classes.drawerHeader} />

            

            <p>Il est plus facile de calculer l´exponentielle d´un endomorphisme :</p>

            <div className="App-row">

            <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
              Diagonalisable
            </Button>

            <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
              Nilpotent
            </Button>

            </div>

            <div className="App-row">

            <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
              Symetrique
            </Button>

            <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
              Orthogonal
            </Button>
            
            </div>

            <img src={logo} style={{width: 150, height: 90, marginTop: 35}} alt="Logo" />

          </header>

        </div>
    )
}

export default Qcm;