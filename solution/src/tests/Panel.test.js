import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper).toMatchSnapshot()
  })

  it('validates props.clickHandler', () => {
    // I can use jest.spyOn to fail a test if console.error is called
    const spy = jest.spyOn(global.console, 'error')
    shallow(<Panel clickHandler={() => {}} />)
    expect(spy).not.toHaveBeenCalled()
  })

  it('calls props.clickHandler when handleClick is run', () => {
    const clickHandler = jest.fn()
    const wrapper = shallow(<Panel clickHandler={clickHandler} />)
    const instance = wrapper.instance()
    instance.handleClick()
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
});
