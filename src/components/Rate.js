import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px'
    },
    rate: {
        marginTop: '30px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: '60px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
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

    const [cost, setCost] = React.useState(80);
    const [value, setValue] = React.useState(2);
    const [category, setCategory] = React.useState('G2');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        let rate = (event.target.value === 'G2') ? 40 : 45;
        setCost(rate * value);
    };

    const handleChange = (event, number) => {
        setValue(number);
        let rate = (category === 'G2') ? 40 : 45;
        setCost(rate * number);
    };

    return (
        <div className={classes.root}>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <MenuItem value={'G2'}>G2 (40$/hour)</MenuItem>
                    <MenuItem value={'G'}>G (45$/hour)</MenuItem>
                </Select>
            </FormControl>
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
                We'll charge ${cost} for {value} hours ({category} Class)
            </Typography>
        </div>
    );
}
