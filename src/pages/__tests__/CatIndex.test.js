import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import CatIndex from '../CatIndex.js';

Enzyme.configure({ adapter: new Adapter() });


describe('When the index page loads', () => {
    it('contains a header element', () => {
      expect(shallow(<CatIndex />).find('h2').length).toEqual(1)
    })
  })
