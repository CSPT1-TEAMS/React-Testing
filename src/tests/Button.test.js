import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from '../components/Button/Button';

describe('<Button />', () => {
  const props = {
    clickHandler: jest.fn(),
    orange: true,
    wide: true,
    name: '5',
  }
  const wrapper = shallow(<Button {...props} />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  })

  it('should call handleClick function when button is clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click')
    expect(props.clickHandler).toHaveBeenCalledTimes(1);
  })

  it('should add the css class orange to the button', () => {
    expect(wrapper.find('.orange')).toHaveLength(1);
  })

  it('should add the css class wide to the button', () => {
    expect(wrapper.find('.wide')).toHaveLength(1);
  })

  it('should render the name prop passed', () => {
    const button = wrapper.find('button')
    expect(button.text()).toMatch(props.name);
  })
});
