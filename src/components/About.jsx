import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Person1 from '../images/person1.jpg';
import Person2 from '../images/person2.jpeg';
import Person3 from '../images/person3.jpeg';
import Person4 from '../images/person4.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    width: '100%',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography gutterBottom variant="h3" component="h2">
        Meet the team
    </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <img
                    className={classes.media}
                    src={Person1}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Stephanie Zou
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Software Engineer
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <img
                    className={classes.media}
                    src={Person2}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Luis
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Full Stack Developer
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <img
                    className={classes.media}
                    src={Person3}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        You Song Hou
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        UI/UX Designer and Developer
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <img
                    className={classes.media}
                    src={Person4}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Theo Carney
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Software Engineer
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}
