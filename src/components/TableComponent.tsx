import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface ITableProps {
    mean: number;
    mode: number;
    median: number;
    standardDev: number;
}

export function TableComponent(props: ITableProps) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Mean</TableCell>
                        <TableCell>Median</TableCell>
                        <TableCell>Standard Deviation</TableCell>
                        <TableCell>Mode</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell id="mean-value-cell">{props.mean}</TableCell>
                        <TableCell id="median-value-cell">{props.median}</TableCell>
                        <TableCell id="standard-deviation-value-cell">{props.standardDev}</TableCell>
                        <TableCell id="mode-value-cell">{props.mode}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
