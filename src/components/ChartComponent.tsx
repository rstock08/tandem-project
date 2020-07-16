import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ReferenceLine } from "recharts";
import { Data } from "./AppContainer";

interface IChartProps {
    dataSet: Data[];
}

export function ChartComponent(props: IChartProps) {
    return (
        <div >
            <LineChart width={700} height={400} data={props.dataSet}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}