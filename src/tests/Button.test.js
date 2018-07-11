import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
   it ('renders correctly',() => {
     const wrapper = shallow(<Button/>)
     expect(wrapper).toMatchSnapshot()
   })

   it('should call cb function on click' ,() => {
    const wrapper = shallow(<Button/>)
    const instance = wrapper.instance()
    const button = wrapper.find('.component-button')
    const button = jest.fn(() => {})
    button.simulate('click')
 
  })

  
   
});
