import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

function createData(date, rent) {
    return { date, rent }
}
/*
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
*/
function RentHistory() {
    var temp = JSON.parse(localStorage.getItem('table') || '[]')
    console.log(temp)
    /* var rows = [
        createData(temp[0].date, temp[0].rent)];
    */
    var rows = temp
    console.log(rows)

    const classes = useStyles()

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Rent amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.date}>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">{row.rent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <a href="/menu">
                <button className="btn btn-primary">Back to Menu</button>
            </a>
        </>
    )
}

/*
class RentHistory extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log(this.temp);
        return (
        <div>{this.temp[0].rent}<br/>{this.temp[0].date}</div>
        )
    }
}*/

export { RentHistory }
