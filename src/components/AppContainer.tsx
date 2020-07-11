import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { MeanComponent } from "./MeanComponent";
import { MedianComponent } from "./MedianComponent";
import { ModeComponent } from "./ModeComponent";
import { StandardDiviationComponent } from "./StandardDiviationComponent";
import { Typography } from "@material-ui/core";
import { valueSetOne } from "../services/mockApiServices";

interface IAppContainerProps {

}

export interface Data {
    name: string,
    count: number
}

export function AppContainer(props: IAppContainerProps) {
    const data = [
        {
            name: "1",
            pv: 200
        },
        {
            name: "2",
            pv: 300
        },
        {
            name: "3",
            pv: 2400
        },
    ]

    const dataSet: Data[] = [] as Data[];

    const setDataSet = () => {
        valueSetOne.forEach((x: number) => {
            let index = dataSet.findIndex(dataPoint => dataPoint.name as any as number === x);
            if (index) {
                dataSet[index].count += 1;
            }
            else {
                dataSet.push(
                    {
                        name: x as any as string,
                        count: 1
                    }
                )
            }
            //const isLargeNumber = (element) => element > 13;
        });
    }

    return (
        <div>
            <Grid container spacing={3} style={{ paddingTop: "2rem" }}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3" component="h2">
                        Tandem Challenge!
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper>Hello</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <MeanComponent />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <MedianComponent />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>Hello</Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ paddingTop: "5rem" }}>
                <Grid item xs={3}>
                    <Paper>Hello</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <ModeComponent dataSet={dataSet} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <StandardDiviationComponent />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>Hello</Paper>
                </Grid>
            </Grid>
        </div>
    );
}