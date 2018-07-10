import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';
import Button from '../components/Button/Button';

import Operate from '../logic/operate/';

describe('<Operate />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Operate />, div);
  });

});

// test button values
describe('<Button />', () => {
  it('should display `1` when `1 button` is clicked', () => {
    const wrapper = shallow(<Button />)
    expect(name).toBe(0);
  })
});