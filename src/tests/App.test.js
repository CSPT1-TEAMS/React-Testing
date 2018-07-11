import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render a Display component', () => {
    expect(wrapper.find('Display').length).toBe(1);
  })

  it('should render a Panel component', () => {
    expect(wrapper.find('Panel').length).toBe(1);
  })

  it('should be able to change state of operation', () => {
    instance.handleClick('-');
    expect(instance.state.operation).toBe('-');
  })

  it('should be able to change state of next', () => {
    instance.handleClick('5');
    expect(instance.state.next).toBe('5');
  })

  it('should be able to change state of total', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance();
    instance.handleClick('5');
    instance.handleClick('+');
    instance.handleClick('10');
    instance.handleClick('=');
    expect(instance.state.total).toBe('15');
  })

  // it should reset back to intial state when AC is pressed
});
