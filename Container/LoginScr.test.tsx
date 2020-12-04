import React from 'react';
import Login from './LoginScr';
import renderer from 'react-test-renderer'
import {shallow} from "enzyme"
import { cleanup, fireEvent,waitForElement } from '@testing-library/react';
import { render } from "@testing-library/react-native";
import sinon from 'sinon';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('SnapShot login Page', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Login/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });


  // Finding Email text Field is present

let findElement = function(tree:any,element:any){
    debugger
var result = undefined
for (let node in tree.children){
    
    for (let newnode in tree.children[node].children){
    if (tree.children[node].children[newnode].props.testID == element){
        result = true
    }
}
}
return result
}
it ("Check Email Text filed is present", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(findElement(tree,"email")).toBeDefined()
})



// Validate the Placeholder of the email text field

let checkPlaceHolder = function(tree:any,element:any){
    debugger

var result = undefined
for (let node in tree.children){
    
    for (let newnode in tree.children[node].children){
        
    if (tree.children[node].children[newnode].props.placeholder == element){
        result = true
    }
}
}
return result
}
it ("Validate the Placeholder of the email text field", () =>{
let tree = renderer.create(<Login/>).toJSON()

expect(checkPlaceHolder(tree,"Email")).toBeDefined()
})


 // Finding Password text Field is present

 let findPassWordElement = function(tree:any,element:any){
    debugger
var result = undefined
for (let node in tree.children){
    
    for (let newnode in tree.children[node].children){
    if (tree.children[node].children[newnode].props.testID == element){
        result = true
    }
}
}
return result
}
it ("Finding Password text Field is present", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(findPassWordElement(tree,"password")).toBeDefined()
})



// Validate the placeHolder of the password text field

let checkPasswordPlaceHolder = function(tree:any,element:any){
    debugger

var result = undefined
for (let node in tree.children){
    
    for (let newnode in tree.children[node].children){
        
    if (tree.children[node].children[newnode].props.placeholder == element){
        result = true
    }
}
}
return result
}
it ("Validate the placeHolder of the password text field", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(checkPasswordPlaceHolder(tree,"Password")).toBeDefined()
})

// Check Weather the button press action Performed
it('Check Weather the button press action Performed', function() {
    const wrapper = shallow(<Login/>);
    wrapper.dive().find("[testID='refreshButton']").simulate("press");
  });


  it('should render without throwing an error', function() {
    const wrapper = shallow(<Login/>);
   
    wrapper.dive().find("[testID='refreshButton']").simulate("press");
    
  });


//   it('Button Click Check', () => {
    // const refreshData = jest.fn();
    // const wrapper = shallow(<Login/>);
    // wrapper.dive().find("[testID='refreshButton']").simulate("press");
    // expect(refreshData).toHaveBeenCalledTimes(1);
//   })
  // it('should render without throwing an error', function() {
  //   const wrapper = shallow(<Login />);
  //   // console.log("should render without throwing an error",wrapper)
  //   let instanceOf = wrapper.instance()
  //   wrapper.instance()<any>[refreshData] = jest.fn()
  //   // const refreshData = jest.spyOn(instanceOf, "refreshData")
  //   wrapper.dive().find("[testID='refreshButton']").simulate("press");
  //     expect(wrapper.instance()["refreshData"]).toHaveBeenCalledTimes(1);
  // });
// // Button click Action
// it('increments counter after 0.5s', async () => {
//     const { getByTestId, getByText } = render(<Login/>); 

//     fireEvent.click(getByTestId('button-up'))

//     const counter = await waitForElement(() => getByText('1')) 

//     expect(counter).tohavetext
//   });
// describe('Email State Check', () => {
//     test('It Should Change the state of the email', () => {
//         const instanceOf = renderer.create(<Login/>).getInstance();
//         if (instanceOf !== null){
//            if (instanceOf.handleInputChange("") !== undefined) {

//             }
//         instanceOf.handleInputChange("sakthi@gmail.com")
//         expect(instanceOf.state.email).toEqual("sakthi@gmail.com")
//         expect(instanceOf.state.email).not.toEqual(null)
//         }
//     })
// })
describe('Test case text input', () => {
    test('email valid email check', () => {
        const instanceOf = renderer.create(<Login />).getInstance();
        instanceOf.handleInputChange("sakthi@gmail.com")
        expect(instanceOf.state.email).toEqual("sakthi@gmail.com")
    })
})
// describe('Hello', () => {
//     it('displays the passed-in name', () => {
//         const { queryByText } = render(<Login />);
//         expect(queryByText('WelCome')).not.toBeNull();
//     });
// });

it('calls click event', () => {
    const FakeFun = jest.spyOn(Login.prototype, 'submitClick');
    const component = shallow((<Login />));
    component.dive().find("[testID='refreshButton']").simulate("press");
    component.update();
    expect(FakeFun).toHaveBeenCalledTimes(1);
  });


