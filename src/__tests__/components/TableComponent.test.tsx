import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TableComponent } from "../../components/TableComponent";
import { TableBody, TableCell } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

let mean: number = 0;
let mode: number = 0;
let median: number = 0;
let standardDev: number = 0;

beforeEach(() => {
    mean = 0;
    mode = 0;
    median = 0;
    standardDev = 0;
});

describe("TableComponent Test Suite", () => {
    it("Smoke test", () => {
        const wrapper = shallow(<TableComponent mean={mean} mode={mode} median={median} standardDev={standardDev} />);
        expect(wrapper).toBeTruthy();
    });
})