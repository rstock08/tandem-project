import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { AppContainer } from "../../components/AppContainer";

let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

beforeEach(() => {
    if (wrapper) {
        wrapper.unmount();
    }
})

describe("AppContainer Test Suite", () => {
    it("Smoke test", () => {
        wrapper = shallow(<AppContainer />);
        expect(wrapper).toBeTruthy();
    });
    it("Tests add button", () => {
        //const spy = jest.spyOn(AppContainer.prototype, "onChangeNumber");
        wrapper = shallow(<AppContainer />);
        // mountWrapper.find("#add-button").simulate("click", { setAddedNumbers: mockSetAddedNumbers, addedNumbers: mockAddedNumbers, setNumberToAdd: mockSetNumberToAdd, numberToAdd: mockNumberToAdd });
        const addButton = wrapper.find("#add-textfield").simulate("change", { target: { value: "20" } });
        //expect(spy).toHaveBeenCalled();
        jest.setTimeout(1000);
        expect(addButton.prop("value")).toEqual("20");
        //expect(setNumberToAdd).toHaveBeenCalled();
    })

    // it("Tests changing number to add input", () => {
    //     let mountWrapper = mount(<AppContainer />);
    //     let textfieldWrapper = mountWrapper.find("#add-textfield");
    //     textfieldWrapper.simulate("change", { target: { value: "20" } });
    //     expect(textfieldWrapper.instance).toHaveValue("20");
    // })
})