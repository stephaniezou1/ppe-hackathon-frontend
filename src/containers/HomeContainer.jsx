import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

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
            <Grid item xs={12}>
            <Container maxWidth="100%">
                <Typography component="div" style={{ backgroundColor: '#f9f9f9', height: '5rem' }} />
                <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper className={classes.paper}>Surgical Masks</Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.paper}>Gloves</Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.paper}>Wipes and Disinfectants</Paper>
                    </Grid>
                </Grid> 
                <Typography component="div" style={{ backgroundColor: '#f9f9f9', height: '5rem' }} />
            </Container>
            </Grid>
          </Grid>
        </div>
      );
    }