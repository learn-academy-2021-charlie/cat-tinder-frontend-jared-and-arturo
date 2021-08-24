import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import Home from '../Home.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the home page loads', () => {
  it('has an p tag', () => {
    expect(shallow(<Home />).find('p').length).toEqual(1)
  })
})
