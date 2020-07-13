import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

import About from './About';
import ContactUs from './ContactUs';

function NavBar(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <div className={classes.root}>
        <AppBar position="static" className="primary-color" style={{ background: '#3f50b5', boxShadow: 'none'}}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" component={Link} to="/"/>
            <Tab label="Schools" component={Link} to="/schools" />
            <Tab label="Meet the Team" component={Link} to="/about" />
            <Tab label="Contact Us" component={Link} to="/contact" />
            </Tabs>
        </AppBar>
        <NavBar value={value} index={0}>
            {/* Home */}
        </NavBar>
        <NavBar value={value} index={1}>
            {/* Schools */}
        </NavBar>
        <NavBar value={value} index={2}>
            <About />
        </NavBar>
        <NavBar value={value} index={3}>
            <ContactUs />
        </NavBar>
        </div>
  );
}