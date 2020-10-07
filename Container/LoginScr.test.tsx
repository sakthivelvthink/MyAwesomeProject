import React from 'react';
import Login from './LoginScr';
import renderer from 'react-test-renderer'
import {render} from "enzyme"

describe('SnapShot login Page', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Login/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

describe('Email State Check', () => {
    test('It Should Change the state of the email', () => {
        const instanceOf = renderer.create(<Login />).getInstance();
        if (instanceOf !== null){
        instanceOf.handleInputChange("sakthi@gmail.com")
        expect(instanceOf.state.email).toEqual("sakthi@gmail.com")
        expect(instanceOf.state.email).not.toEqual(null)
        }
    })
})
// describe('Test case text input', () => {
//     test('email valid email check', () => {
//         const instanceOf = renderer.create(<Login />).getInstance();
//         instanceOf.handleInputChange("sakthi@gmail.com")
//         expect(instanceOf.state.email).toEqual("sakthi@gmail.com")
//     })
// })
// describe('Hello', () => {
//     it('displays the passed-in name', () => {
//         const { queryByText } = render(<Login />);
//         expect(queryByText('WelCome')).not.toBeNull();
//     });
// });

// Finding Element is present or not present

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
it ("findElement", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(findElement(tree,"email")).toBeDefined()
})


// Check PlaceHolder

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
it ("Check PlaceHolder", () =>{
let tree = renderer.create(<Login/>).toJSON()
expect(checkPlaceHolder(tree,"Email")).toBeDefined()
})