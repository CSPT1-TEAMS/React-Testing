import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel.js';
import calculate from '../logic/calculate';
jest.mock('../logic/calculate');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a div called component-app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.component-app')).toHaveLength(1)
  });

  it('Should start with 0 and properties next, and operation in state', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.state('total')).toEqual('0')
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined();
  });

  it('handleClick function should work', () => {
    const appWrapper = shallow(<App />)
    const instance = appWrapper.instance()

    instance.handleClick()
    expect(calculate).toBeCalled()

  });

  it('should have handleClick that changes state', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()

    instance.handleClick("5")
    expect(wrapper.state('next')).toEqual("5");
  });
});
