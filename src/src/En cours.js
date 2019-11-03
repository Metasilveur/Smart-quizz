import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      display: 'flex',
      marginTop: '100px',
    },
}));


const EnCoursQuizz = ({ match, location, encours }) => {
   
  const classes = useStyles();

    return(

      <div className="app">
            <header className="app-header">
              
              <div className={classes.ecriture}>
                  {encours === 'oui' ? <p>QUIZZ EN COURS ...</p> : <p>PAS DE QUIZZ EN COURS</p>}
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
