import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ChartComponent } from "./ChartComponent";

interface IAppContainerProps {

}

export function AppContainer(props: IAppContainerProps) {
    return (
        <div>
            <Grid container spacing={3} style={{ paddingTop: "5rem" }}>
                <Grid item xs={3}>
                    <Paper>Hello</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <ChartComponent />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>Hello</Paper>
                </Grid>
            </Grid>
        </div>
    );
}