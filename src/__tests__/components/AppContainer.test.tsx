import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { AppContainer } from "../../components/AppContainer";
import { act } from "@testing-library/react";

let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

beforeEach(() => {
    if (wrapper) {
        wrapper.unmount();
    }
    jest.clearAllMocks();
})

describe("AppContainer Test Suite", () => {
    it("Smoke test", () => {
        wrapper = shallow(<AppContainer />);
        expect(wrapper).toBeTruthy();
    });
    it("Tests add button", () => {
        wrapper = shallow(<AppContainer />);
        wrapper.find("#add-textfield").simulate("change", { target: { value: "20" } });
        wrapper.update();
        expect(wrapper.find("#add-textfield").prop("value")).toEqual("20");
    });
    it("Tests toggle button", async () => {
        wrapper = shallow(<AppContainer />);
        expect(wrapper.find("#toggle-button").prop("checked")).toEqual(false);
        wrapper.find("#toggle-button").simulate("change");
        wrapper.update();
        expect(wrapper.find("#toggle-button").prop("checked")).toEqual(true);
    });
})