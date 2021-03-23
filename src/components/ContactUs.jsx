import React from 'react';
import {Form, Field} from 'react-final-form';
import {TextField} from 'mui-rff';
import {
    Grid,
    Button,
    CssBaseline
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App({handleSubmit}) {
    const onSubmit = async values => {
        handleSubmit(values);
    };
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';``
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
                initialValues={{message: 'Hi there, I am interested in knowing more about your driving services. Please give me a callback on the number provided. Thank you'}}
                validate={validate}
                render={({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <CssBaseline/>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="name"
                                        type="text"
                                        label="Your name"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="phone"
                                        fullWidth
                                        required
                                        type="text"
                                        label="Your phone"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="email"
                                        fullWidth
                                        type="email"
                                        label="Your email"
                                    />
                                </Grid>

                                <Grid item xs={12} style={{paddingTop: '30px'}}>
                                    <TextField
                                        fullWidth
                                        name="message"
                                        multiline
                                        rows={4}
                                        rowsMax={8}
                                        label="Your message"
                                    />
                                </Grid>

                                <Grid item style={{marginTop: 16}} container justify="flex-end">
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
                    </form>
                )}
            />
        </div>
    );
}

export default App;
