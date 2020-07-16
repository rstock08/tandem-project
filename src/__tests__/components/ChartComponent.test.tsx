import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ChartComponent } from "../../components/ChartComponent";
import { Data } from "../../components/AppContainer";

Enzyme.configure({ adapter: new Adapter() });

let mockDataSet: Data[] = [] as Data[];

beforeEach(() => {
    mockDataSet: [] as Data[];
});

describe("ChartComponent Test Suite", () => {
    it("Smoke test", () => {
        const wrapper = shallow(<ChartComponent dataSet={mockDataSet} />);
        expect(wrapper).toBeTruthy();
    });
})