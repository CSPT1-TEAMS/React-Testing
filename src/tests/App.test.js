import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('starts with 0', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
    expect(wrapper).toMatchSnapshot();
  })
});


