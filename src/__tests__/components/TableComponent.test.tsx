import React from "react";
import { shallow } from "enzyme";
import { TableComponent } from "../../components/TableComponent";

let mean: number = 0;
let mode: number = 0;
let median: number = 0;
let standardDev: number = 0;

beforeEach(() => {
    mean = 11;
    mode = 12;
    median = 13;
    standardDev = 14;
});

describe("TableComponent Test Suite", () => {
    it("Smoke test", () => {
        const wrapper = shallow(<TableComponent mean={mean} mode={mode} median={median} standardDev={standardDev} />);
        expect(wrapper).toBeTruthy();
    });
    it("Test mean value is set", () => {
        const wrapper = shallow(<TableComponent mean={mean} mode={mode} median={median} standardDev={standardDev} />);
        expect(wrapper.find("#mean-value-cell").text()).toEqual("11");
    });
    it("Test mode value is set", () => {
        const wrapper = shallow(<TableComponent mean={mean} mode={mode} median={median} standardDev={standardDev} />);
        expect(wrapper.find("#mode-value-cell").text()).toEqual("12");
    });
    it("Test median value is set", () => {
        const wrapper = shallow(<TableComponent mean={mean} mode={mode} median={median} standardDev={standardDev} />);
        expect(wrapper.find("#median-value-cell").text()).toEqual("13");
    });
    it("Test standard deviation value is set", () => {
        const wrapper = shallow(<TableComponent mean={mean} mode={mode} median={median} standardDev={standardDev} />);
        expect(wrapper.find("#standard-deviation-value-cell").text()).toEqual("14");
    });
})