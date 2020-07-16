import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MockApiServices } from "../../services/MockApiServices";

Enzyme.configure({ adapter: new Adapter() });

describe("Test MockApiServices", () => {
    it("getValueSetOne() returns an array", () => {
        return MockApiServices.getValueSetOne()
            .then(data => {
                expect(data.length).toBe(1234);
            });
    });
    it("getValueSetTwo() returns an array", () => {
        return MockApiServices.getValueSetTwo()
            .then(data => {
                expect(data.length).toBe(4321);
            });
    });
})