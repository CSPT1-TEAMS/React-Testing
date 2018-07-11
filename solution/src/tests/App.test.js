import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

import calculate from '../logic/calculate'
jest.mock('../logic/calculate')

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('starts with state.total: \'0\'', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    expect(instance.state.total).toBe('0')
  })

  it('starts with state.next: null', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    expect(instance.state.next).toBeNull()
  })

  it('starts with state.operation: null', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    expect(instance.state.operation).toBeNull()
  })

  it('calls calculate when handleClick is run', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.handleClick()
    expect(calculate).toHaveBeenCalledTimes(1)
  })

  it('has the class "component-app"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.hasClass('component-app')).toBeTruthy()
  })
});
