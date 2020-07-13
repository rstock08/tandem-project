import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";
import { Data } from "./AppContainer";

interface ModeComponentProps {
    dataSet: Data[]
}

export function ModeComponent(props: ModeComponentProps) {
    return (
        <div style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>

        </div>
    );
}