import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Display from '../components/Display/Display';


describe('<Display /> Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render the value prop', () => {
    const props = {
      value: "Render this string"
    }
    const wrapper = shallow(<Display {...props} />);
    expect(wrapper.text()).toMatch(props.value);
  })
});
