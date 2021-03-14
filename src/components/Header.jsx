import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Button } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from './Logo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import Car from "./Car";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'rgb(36, 41, 46)',
    marginBottom: '100px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
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
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [open] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

  const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <FontAwesomeIcon icon={faCarSide} />
          </IconButton>
          <Typography variant="h6" color="inherit" style={{flex: 1}}>
            Drive Test PRO
          </Typography>
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab label="About Us" />
              <StyledTab label="Testimonials" />
              <StyledTab label="Contact Us" />
            </StyledTabs>
          <Button variant="contained" color="primary">
            <PhoneIphoneIcon/>
            <b>(647) 739-1046</b>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
