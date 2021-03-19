import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Field} from 'react-final-form';
import {TextField, Checkbox, Radio, Select} from 'final-form-material-ui';
import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
/*import {MDBBtn, MDBIcon} from "mdbreact";
import 'mdbreact/dist/css/mdb.css'*/
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {SectionText} from './Section'
import CancelIcon from '@material-ui/icons/Cancel';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";


function App({handleClose, handleClick}) {
    const onSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        handleClose();
        handleClick();
    };
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.phone) {
            errors.phone = 'Required';
        }
        return errors;
    };

    return (
        <div style={{padding: 16, margin: 'auto', maxWidth: 1200}}>

            <Form
                onSubmit={onSubmit}
                initialValues={{message: 'Hi there,\n\nI am interested in knowing more about your driving services. Please give me a callback on the number provided.\n\nThank you'}}
                validate={validate}
                render={({handleSubmit, reset, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <CssBaseline/>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="name"
                                        component={TextField}
                                        type="text"
                                        label="Your name"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="phone"
                                        fullWidth
                                        required
                                        component={TextField}
                                        type="text"
                                        label="Your phone"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="email"
                                        fullWidth
                                        component={TextField}
                                        type="email"
                                        label="Your email"
                                    />
                                </Grid>

                                <Grid item xs={12} style={{paddingTop: '30px'}}>
                                    <Field
                                        fullWidth
                                        name="message"
                                        component={TextField}
                                        multiline
                                        rows={4}
                                        rowsMax={8}
                                        label="Your message"
                                    />
                                </Grid>

                                <Grid justify="space-between" item style={{marginTop: 16}} container justify="flex-end">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        endIcon={<SendIcon/>}
                                        disabled={submitting}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                      {/*  <pre>{JSON.stringify(values, 0, 2)}</pre>*/}
                    </form>
                )}
            />
        </div>
    );
}

export default App;
