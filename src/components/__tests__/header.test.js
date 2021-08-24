import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter() });

describe('When the header loads', () => {
  const header = shallow(<Header />)
  it('contains a fire emoji', () => {
    let h1 = header.find('h1')
    expect(h1.text()).toContain('🔥')
  })
})
