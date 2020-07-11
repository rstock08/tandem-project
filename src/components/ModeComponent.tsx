import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";
import { Data } from "./AppContainer";

interface ModeComponentProps {
    dataSet: Data[]
}

export function ModeComponent(props: ModeComponentProps) {
    return (
        <div>
            <LineChart width={600} height={300} data={props.dataSet}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}