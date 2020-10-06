import React from 'react';
import { shallow, mount } from 'enzyme';
import login from './LoginScr'
import Login from './LoginScr';
import renderer from 'react-test-renderer'
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
import { render } from '@testing-library/react-native';
import Hello from './Flash';

describe('SnapShot login Page', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Login/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

describe('Test case for testing login', () => {
    test('email check', () => {
        const instanceOf = renderer.create(<Login />).getInstance();
        instanceOf.handleInputChange("sakthi@gmail.com")
        expect(instanceOf.state.email).toEqual("sakthi@gmail.com")
        expect(instanceOf.state.email).not.toEqual(null)
    })
})
describe('Test case text input', () => {
    test('email valid email check', () => {
        const instanceOf = renderer.create(<Login />).getInstance();
        instanceOf.handleInputChange("sakthi@gmail.com")
        expect(instanceOf.state.email).toEqual("sakthi@gmail.com")
    })
})
describe('Hello', () => {
    it('displays the passed-in name', () => {
        const { queryByText } = render(<Login />);
        expect(queryByText('WelCome')).not.toBeNull();
    });
});

// Finding Element is present or not present

let findElement = function(tree:any,element:any){
    debugger
var result = undefined
for (node in tree.children){
    
    for (newnode in tree.children[node].children){
    if (tree.children[node].children[newnode].props.testID == element){
        result = true
    }
}
}
return result
}
it ("findElement", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(findElement(tree,"email")).toBeDefined()
})


// Check PlaceHolder

let checkPlaceHolder = function(tree:any,element:any){
    debugger

var result = undefined
for (node in tree.children){
    
    for (newnode in tree.children[node].children){
        
    if (tree.children[node].children[newnode].props.placeholder == element){
        result = true
    }
}
}
return result
}
it ("Check PlaceHolder", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(checkPlaceHolder(tree,"Email")).toBeDefined()
})