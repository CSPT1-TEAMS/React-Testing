import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Display />)
    expect(wrapper).toMatchSnapshot()
  })

  it('validates props.value', () => {
    // I can use jest.spyOn to fail a test if console.error is called
    const spy = jest.spyOn(global.console, 'error')
    shallow(<Display value={'foo'} />)
    expect(spy).not.toHaveBeenCalled()
  })

  it('displays the given props.value', () => {
    const wrapper = shallow(<Display value={'foo'} />)
    expect(wrapper.contains('foo')).toBeTruthy()
  })

  it('has the class "component-display"', () => {
    const wrapper = shallow(<Display />)
    expect(wrapper.hasClass('component-display')).toBeTruthy()
  })
});
