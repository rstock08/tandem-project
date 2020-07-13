import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Switch, TextField, Button } from "@material-ui/core";
import { ChartComponent } from "./ChartComponent";
import stats from "stats-lite";
import { TableComponent } from "./TableComponent";
import { MockApiServices } from "../services/MockApiServices";
import validator from "validator";

export interface Data {
    name: number,
    count: number
}

function parseData(dataToParse: number[]): Data[] {
    let parsedData: Data[] = [] as Data[];
    dataToParse.forEach((x: number) => {
        let index = parsedData.findIndex(dataPoint => dataPoint.name === x);
        if (index !== -1) {
            parsedData[index].count += 1;
        }
        else {
            parsedData.push(
                {
                    name: x,
                    count: 1
                }
            )
        }
    });
    return (parsedData);
}

type setNumber = (val: string) => void;
function onChangeNumber(val: string, setNumberToAdd: setNumber) {
    if (validator.isInt(val))
        setNumberToAdd(val);
}

type setArrNumber = (val: number[]) => void;
function submitNumber(setAddedNumbers: setArrNumber, addedNumbers: number[], setNumberToAdd: setNumber, numberToAdd: string) {
    if (numberToAdd !== "") {
        setNumberToAdd("");
        let newNumbersAdded: number[] = [...addedNumbers];
        let newNum: number = +numberToAdd;
        newNumbersAdded.push(newNum);
        setAddedNumbers(newNumbersAdded);
    }
}

export function AppContainer() {
    const [dataSetOne, setDataSetOne] = useState([] as Data[]);
    const [dataSetOneMode, setDataSetOneMode] = useState(0);
    const [dataSetOneMean, setDataSetOneMean] = useState(0);
    const [dataSetOneMedian, setDataSetOneMedian] = useState(0);
    const [dataSetOneDeviation, setDataSetOneDeviation] = useState(0);

    const [dataSetTwo, setDataSetTwo] = useState([] as Data[]);
    const [dataSetTwoMode, setDataSetTwoMode] = useState(0);
    const [dataSetTwoMean, setDataSetTwoMean] = useState(0);
    const [dataSetTwoMedian, setDataSetTwoMedian] = useState(0);
    const [dataSetTwoDeviation, setDataSetTwoDeviation] = useState(0);

    const [toggleData, onToggleData] = useState(false);
    const [numberToAdd, setNumberToAdd] = useState("");
    const [addedNumbers, setAddedNumbers] = useState([] as number[]);

    useEffect(() => {
        Promise.all([MockApiServices.getValueSetOne(), MockApiServices.getValueSetTwo()])
            .then((results) => {
                let sortedReturn1 = results[0].concat(addedNumbers).sort(function (a, b) { return a - b });
                let dataSet1: Data[] = parseData(sortedReturn1);

                let sortedReturn2 = results[1].concat(addedNumbers).sort(function (a, b) { return a - b });
                let dataSet2: Data[] = parseData(sortedReturn2);

                setDataSetOne(dataSet1);
                setDataSetOneMode(Math.round(1000 * stats.mode(sortedReturn1)) / 1000);
                setDataSetOneMean(Math.round(1000 * stats.mean(sortedReturn1)) / 1000);
                setDataSetOneDeviation(Math.round(1000 * stats.stdev(sortedReturn1)) / 1000);
                setDataSetOneMedian(Math.round(1000 * stats.median(sortedReturn1)) / 1000);

                setDataSetTwo(dataSet2);
                setDataSetTwoMode(Math.round(1000 * stats.mode(sortedReturn2)) / 1000);
                setDataSetTwoMean(Math.round(1000 * stats.mean(sortedReturn2)) / 1000);
                setDataSetTwoDeviation(Math.round(1000 * stats.stdev(sortedReturn2)) / 1000);
                setDataSetTwoMedian(Math.round(1000 * stats.median(sortedReturn2)) / 1000);
            });
    }, [addedNumbers]);



    return (
        <div>
            <Grid container alignItems="center" style={{ paddingTop: "2rem" }}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3" component="h2">
                        Tandem Challenge!
                    </Typography>
                </Grid>


                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper style={{ paddingTop: "1rem" }}>
                        <ChartComponent dataSet={!toggleData ? (dataSetOne) : (dataSetTwo)} />
                    </Paper>
                </Grid>
                <Grid item xs={3} />


                <Grid item xs={4} />
                <Grid item xs={4} style={{ paddingTop: "2rem" }}>
                    <TableComponent
                        mean={!toggleData ? (dataSetOneMean) : (dataSetTwoMean)}
                        mode={!toggleData ? (dataSetOneMode) : (dataSetTwoMode)}
                        standardDev={!toggleData ? (dataSetOneDeviation) : (dataSetTwoDeviation)}
                        median={!toggleData ? (dataSetOneMedian) : (dataSetTwoMedian)}
                    />
                </Grid>
                <Grid item xs={4} />

                <Grid item xs={4} />
                <Grid item xs={2} style={{ paddingTop: "1rem" }}>
                    <Grid component="label" container alignItems="center">
                        <Grid item>Data1</Grid>
                        <Grid item>
                            <Switch checked={toggleData} onChange={() => onToggleData(!toggleData)} />
                        </Grid>
                        <Grid item>Data2</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} style={{ paddingTop: "1rem" }} >
                    <TextField value={numberToAdd} label="Number to Add" onChange={(e) => onChangeNumber(e.target.value, setNumberToAdd)} />
                    <Button style={{ marginTop: ".5rem" }} variant="contained" onClick={() => submitNumber(setAddedNumbers, addedNumbers, setNumberToAdd, numberToAdd)}>Submit</Button>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    );
}