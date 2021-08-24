import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import Footer from '../Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('When the footer renders', () => {
  const footer = shallow(<Footer />)
  it('contains text', () => {
    let h3 = footer.find('h3')
    expect(h3.text()).toEqual('This App was created by Arturo and Jared')
  })
})
