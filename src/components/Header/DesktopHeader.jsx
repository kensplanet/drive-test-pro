import PropTypes from 'prop-types'
import React from 'react'
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
import ContactUs from '../ContactUs';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {SectionText} from "../Section";
import CancelIcon from '@material-ui/icons/Cancel';
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";

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
const Header = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const handleSubmit = (values) => {
        let val = { ...values };
        val.message = val.message.replace(/(\r\n|\n|\r)/gm," ");
        axios.post('https://vookfl8vg0.execute-api.ca-central-1.amazonaws.com/prod', val).then(function () {
            setOpen(false);
            setMessage('Message received');
            setOpenSnackBar(true);
        }).catch(() => {
            setOpen(false);
            setMessage('An error occurred. Please try again.');
            setOpenSnackBar(true);
        });
    };

    const handleChange = (event, newValue) => {
        if (newValue === 2) {
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
                onClose={() => {setOpen(false);}}
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
                    <CancelIcon fontSize={"large"} style={{cursor: 'pointer'}} onClick={() => {setOpen(false);}}/>

                </DialogTitle>
                <DialogContent>
                    <ContactUs handleSubmit={handleSubmit}/>
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
                        <StyledTab label="Services" component={Link} to={"/#services"}/>
                        <StyledTab label="Testimonials" component={Link} to={"/#testimonials"}/>
                        <StyledTab label="Contact Us"/>
                    </StyledTabs>
                    <Button variant="contained" color="primary">
                        <PhoneIphoneIcon/>
                        <b>(647) 739-1046</b>
                    </Button>
                </Toolbar>
            </AppBar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
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
