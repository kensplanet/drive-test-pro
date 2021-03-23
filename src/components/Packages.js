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

const rows = [
    createData('Cost', '$300', '$450', '$450'),
    createData('In class sessions', '20 hours', '10 hours', <ClearIcon/>),
    createData('In car lessons', <ClearIcon/>, '10 hours', '15 hours'),
    createData('Pick & Drop Services', <ClearIcon/>, <DoneIcon/>, <DoneIcon/>),
    createData('Instructor car for road test', <ClearIcon/>, <DoneIcon/>, <DoneIcon/>),
    createData('Test Bookings', <DoneIcon/>, <DoneIcon/>, <DoneIcon/>),
];

const useStyles = makeStyles({
    table: {

    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{marginBottom: '30px'}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell><Typography variant="h5">Packages</Typography></StyledTableCell>
                        <StyledTableCell align="right"><Typography variant="h5">G1</Typography></StyledTableCell>
                        <StyledTableCell align="right"><Typography variant="h5">G2</Typography></StyledTableCell>
                        <StyledTableCell align="right"><Typography variant="h5">G</Typography></StyledTableCell>
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
