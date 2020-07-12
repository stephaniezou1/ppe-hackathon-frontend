import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function HomeButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} style={{justifyContent: 'center'}}>
        <ButtonGroup
          color="primary"
          aria-label="vertical outlined primary button group"
        >
            <Button component={Link} to="/register" >Get PPE</Button>
        </ButtonGroup>
        <ButtonGroup
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button component={Link} to="/schools">Give PPE</Button>
        </ButtonGroup>
        </div>
  );
}
