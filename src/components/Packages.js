import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import Typography from "@material-ui/core/Typography";
import withDimensions from "./Dimensions";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
    table: {

    },
});

const CustomizedTables = ({isMobile}) => {
    const classes = useStyles();

    const rows = [
        createData('Cost', <><div>$449</div><div style={{fontSize: '15' +
                'px'}}>(+HST)</div></>, <><div>$569</div><div style={{fontSize: '15' +
                'px'}}>(+HST)</div></>, <><div>$769</div><div style={{fontSize: '15' +
                'px'}}>(+HST)</div></>),
        createData('In Class Sessions', !isMobile() ? '20 hours': '20h', !isMobile() ? '20 hours': '20h', !isMobile() ? '20 hours': '20h'),
        createData('In Home Activity', !isMobile() ? '10 hours': '10h', !isMobile() ? '10 hours': '10h', !isMobile() ? '10 hours': '10h'),
        createData('In Car Lessons', !isMobile() ? '10 hours' : '10h', !isMobile() ? '10 hours' : '10h', !isMobile() ? '15 hours': '15h'),
        createData('Pick & Drop Services', <DoneIcon/>, <DoneIcon/>, <DoneIcon/>),
        createData('Early Road Test Booking', <DoneIcon/>, <DoneIcon/>, <DoneIcon/>),
        createData('Eligible Insurance Discount', <DoneIcon/>, <DoneIcon/>, <DoneIcon/>),
        createData('Instructor car for road test', <ClearIcon/>, <DoneIcon/>, <DoneIcon/>)
    ];

    return (
        <TableContainer component={Paper} style={{marginBottom: '30px'}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell><Typography variant={isMobile() ? "h6": "h5"}>Packages</Typography></StyledTableCell>
                        <StyledTableCell align="right"><Typography variant={isMobile() ? "h6": "h5"}>Silver</Typography></StyledTableCell>
                        <StyledTableCell align="right"><Typography variant={isMobile() ? "h6": "h5"}>Gold</Typography></StyledTableCell>
                        <StyledTableCell align="right"><Typography variant={isMobile() ? "h6": "h5"}>{!isMobile() ? 'Platinum' : <><div>Plati</div>num</>}</Typography></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <Typography variant="h6">{row.name}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="right"><Typography variant="h6">{row.calories}</Typography></StyledTableCell>
                            <StyledTableCell align="right"><Typography variant="h6">{row.fat}</Typography></StyledTableCell>
                            <StyledTableCell align="right"><Typography variant="h6">{row.carbs}</Typography></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withDimensions(CustomizedTables)
