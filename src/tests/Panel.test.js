import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Panel />)
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper).toMatchSnapshot();
  })
});
