import PropTypes from 'prop-types'
import React, {useState} from 'react'
import clsx from 'clsx'
import {makeStyles, withStyles, useTheme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {Button} from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "gatsby";
import Icon from '../Icon';
import Modal from '@material-ui/core/Modal';
import ContactUs from '../ContactUs';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {SectionText} from "../Section";
import CancelIcon from '@material-ui/icons/Cancel';

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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Header = ({siteTitle}) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (event, newValue) => {
        if (newValue === 1) {
            setOpen(true);
        }
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
    })((props) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle disableTypography id="alert-dialog-slide-title" style={{display: 'flex',
                    justifyContent: 'space-between',
                    'alignItems': 'center'}}>
                    <SectionText
                        anchor
                        id={'contactus'} style={{align: 'center', padding: '0px'}}
                        heading={'Contact Us'}
                        className={'smaller'}>
                    </SectionText>
                    <CancelIcon fontSize={"large"} style={{cursor: 'pointer'}} onClick={handleClose}/>

                </DialogTitle>
                <DialogContent>
                    <ContactUs/>
                </DialogContent>
            </Dialog>
            <AppBar
                position="fixed"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Link to="/">
                            <img width={"96px"} src={"/icon.png"}/>
                        </Link>
                    </IconButton>

                    <Typography variant="h6" color="inherit" style={{flex: 1, paddingLeft: '10px'}}>
                        Drive Test PRO
                    </Typography>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab label="Testimonials"/>
                        <StyledTab label="Contact Us"/>
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
