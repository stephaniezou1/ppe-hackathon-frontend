import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function HomeContainer() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* <Paper className={classes.paper}> */}
                  <h1> Donate your PPE to Schools</h1>
                  <p> Schools face new challenges because of COVID-19. <br/>
                  They need PPE to protect their students and faculty.</p>
              {/* </Paper> */}
            </Grid>
            <Grid item xs={6}>
              <img className="home-image" src={require("../images/home_1.jpg")}/>
            </Grid>
          </Grid>
        </div>
      );
    }