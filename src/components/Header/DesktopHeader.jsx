import PropTypes from 'prop-types'
import React, {useState} from 'react'
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
import Logo from '../Logo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import Car from "../Car";
import Hamburger from "../Hamburger";
import {Section} from "../Section";
import {Link} from "gatsby";
import styled from "styled-components";
import CallIcon from '@material-ui/icons/Call';

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

const MobileContainer = styled.div`
  border-bottom: 1px solid #ccc;
  height: 60px;
  position: sticky;
  z-index: 1000;
  top: 0px;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  div ul li {
    margin: 0px;
    padding: 0px;
  }
  ul li a.phone {
    display: inline-block;
  }
`;

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

  const MobileDrawer = styled.div`
  position: absolute;
  text-align: center;
  background: #fff;
  transition: transform 0.2s;
  z-index: -1;
  ul {
    display: block;
  }
  li {
    display: block;
  }
  li a {
    padding: 12px 0px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 9px;
    display: block;
    border-radius: 7px;
    color: #333;
    background: #efefef;
  }
`


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

  const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <MobileContainer as={'header'} className={'mobile'}>
          <div style={{ padding: '0px 20px', height: '100%', background: '#fff' }}>
            <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            {/*  <MainLogo />*/}
              <Nav className={'mobile pos-center-vert'}>
                <ul>
                  <li style={{ marginRight: '13px' }}>
                    <b>(647) 739-1046</b>
                  </li>
                  <li>
                    <Hamburger
                        showClose={openMenu}
                        onClick={() => {
                          setOpenMenu(!openMenu)
                        }}
                    />
                  </li>
                </ul>
              </Nav>
            </div>
          </div>
          <MobileDrawer
              style={{
                position: 'absolute',
                left: 0,
                top: '100%',
                width: '100%',
                boxShadow: openMenu ? '0px 2px 2px rgba(0, 0, 0, 0.3)' : '',
                pointerEvents: openMenu ? '' : 'none',
                transform: openMenu ? 'translateY(0)' : 'translateY(-100%)'
              }}>
            <Section>
              <ul>
                <li>
                  <Link to="/#services" onClick={() => setOpenMenu(false)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#locations" onClick={() => setOpenMenu(false)}>
                    Locations, Rates, and Hours
                  </Link>
                </li>
                <li>
                  <Link to="/#faq" onClick={() => setOpenMenu(false)}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </Section>
          </MobileDrawer>
        </MobileContainer>
    )
  };

  const Nav = styled.nav`
  margin: auto 0 auto auto;
  font-size: 1.125rem;
  font-weight: 700;
  right: 0;
  ul li {
    float: left;
    margin-right: 5px;
    padding: 0px 15px;
    transition: 0.17s;
  }
  ul li:last-of-type {
    margin-right: 0;
    padding-right: 0;
  }
  li a {
    padding: 9px 0;
    cursor: pointer;
    position: relative;
    color: ${(props) => props.theme.linkAlt};
    :after {
      content: '';
      transition: 0.15s;
      height: 4px;
      width: 0;
      background-color: ${(props) => props.theme.accent};
      left: 50%;
      bottom: -3px;
      transform: translateX(-50%);
      position: absolute;
    }
    :hover:after {
      width: 100%;
    }
  }
  li a.phone {
    white-space: no-wrap;
    color: #fff;
    transition: 0.2s;
    background-color: ${(props) => props.theme.accentDark};
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    :hover {
      color: #fff;
      background-color: ${(props) => props.theme.accentDarker};
    }
    :hover:after {
      display: none;
    }
  }
`;

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
