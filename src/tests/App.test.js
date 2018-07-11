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

  it('Should start with 0', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()

    expect(instance.state.total).toBe('0')
  });

  it('handleClick function should work', () => {
    const appWrapper = shallow(<App />)
    const instance = appWrapper.instance()

    instance.handleClick()
    expect(calculate).toBeCalled()

  });
});
