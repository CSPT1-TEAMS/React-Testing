import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should display 1 when 1 button is pressed', () => {
    const wrapper = shallow(<Panel />);
    // const instance = wrapper.instance();
    // const button = wrapper.find('.component-panel').first();
    // expect(wrapper.find(button)).to.have.length(1)
    // console.log('BUTTON', button)
    // console.log('WRAPPER', wrapper.name)
  })
  it('should match the snapshot', () => {
      const wrapper = shallow(<Panel />);
      expect(wrapper).toMatchSnapshot();
    })
  // it('should render nineteen Button components', () => {
  //   const wrapper = shallow((
  //   <Panel>
  //     <div className='component-panel'>
  //       <Button />
  //     </div>
  //   </Panel>  ));
  //   console.log('PANEL', wrapper)
  //   expect(wrapper.contains(<div className='component-panel'></div>)).toBeTruthy()
  // })  
});
