import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Image1 from '../images/contactus.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  mb: {
      marginTop: '1rem'
  }
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <img src={Image1} alt="image" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <TextField
                id="outlined-full-width"
                label="Name"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="outlined"
                />
            <TextField
                id="outlined-full-width"
                label="Email"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                variant="outlined"
                />
            <TextField
                id="outlined-full-width"
                label="Message"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                variant="outlined"
                />
            <Button className={classes.mb} variant="contained" color="primary" size='large'>
                Send
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}