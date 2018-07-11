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
  it('recognizes proper class name', () => {
    const wrapper = shallow(<Button orange />)
    // console.log('wrapper', wrapper.props)
    expect(wrapper.hasClass('orange')).toBeTruthy();
  });
  it('expects button to match snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  })
});
