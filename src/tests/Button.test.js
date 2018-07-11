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

  it('renders correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot();
  });

  it('orange/ wide should be true/ false', () => {
    const wrapper = shallow((
        <div className='component-button orange' />
    ));
    expect(wrapper.contains(<div className='component-button'/>)).toBe(true)


  })
});
