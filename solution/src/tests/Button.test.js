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

  it('matches snapshot', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })

  it('has the class "component-button"', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.hasClass('component-button')).toBeTruthy()
  })

  it('has the class "orange" when it has the orange prop', () => {
    const wrapper = shallow(<Button orange />)
    expect(wrapper.hasClass('orange')).toBeTruthy()
  })

  it('does not have the class "orange" when it does not have the orange prop', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.hasClass('orange')).toBeFalsy()
  })

  it('has the class "wide" when it has the orange prop', () => {
    const wrapper = shallow(<Button wide />)
    expect(wrapper.hasClass('wide')).toBeTruthy()
  })

  it('does not have the class "wide" when it does not have the orange prop', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.hasClass('wide')).toBeFalsy()
  })

  it('calls props.clickHandler when handleClick is run', () => {
    const clickHandler = jest.fn()
    const wrapper = shallow(<Button clickHandler={clickHandler} />)
    const instance = wrapper.instance()
    instance.handleClick()
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })

  it('calls props.clickHandler when the <button> is clicked', () => {
    const clickHandler = jest.fn()
    const wrapper = shallow(<Button clickHandler={clickHandler} />)

    wrapper.find('button').first().simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })
});
