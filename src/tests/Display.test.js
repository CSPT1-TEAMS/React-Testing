import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Display from '../components/Display/Display';


describe('<Display /> Component', () => {
  const props = {
    value: "Render this string"
  }
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render the value prop', () => {
    const wrapper = shallow(<Display {...props} />);
    expect(wrapper.text()).toMatch(props.value);
  })

  it('should render a div', () => {
    const wrapper = shallow(<Display {...props} />)
    expect(wrapper.type()).toBe('div')
  })
});
