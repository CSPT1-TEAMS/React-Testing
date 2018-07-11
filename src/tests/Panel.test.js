import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should render all buttons', () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper.find('Button').length).toBe(19);
  })
});
