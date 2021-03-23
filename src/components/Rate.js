import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
        marginLeft: '20px',
        marginRight: '20px'
    },
    margin: {
        height: theme.spacing(3),
    },
    rate: {
        marginTop: '30px'
    }
}));

const marks = [
    {
        value: 2,
        label: '2 hrs',
    },
    {
        value: 20,
        label: '20 hrs',
    },
];

function valuetext(value) {
    return `${value} hrs`;
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}


export default function DiscreteSlider() {
    const classes = useStyles();

    const [cost, setCost] = React.useState(90);
    const [value, setValue] = React.useState(2);

    const handleChange = (event, number) => {
        setValue(number);
        let rate = 45, totalCost = 0;
        let getRate = (n) => {
            if (n <=5 ) { rate = 45; return rate;}
            if (n <=10 ) { rate = 40; return rate;}
            if (n <=15 ) { rate = 35; return rate;}
            if (n <=20 ) { rate = 30; return rate;}
            return rate;
        };

        for (let i = 1; i <= number; i++) {
            totalCost += getRate(i);
        }
        setCost(totalCost);
    };

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={2}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                marks={marks}
                onChange={debounce(handleChange, 300)}
                min={2} max={20}
                valueLabelDisplay="on"
            />
            <Typography variant="h3" gutterBottom className={classes.rate}>
                We'll charge ${cost} for {value} hours
            </Typography>
        </div>
    );
}
