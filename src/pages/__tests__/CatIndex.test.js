import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import CatIndex from '../CatIndex.js';

Enzyme.configure({ adapter: new Adapter() });


describe('When the home page loads', () => {
    it('has an p tag', () => {
      expect(shallow(<CatIndex />).find('CardTitle').length).toEqual(1)
    })
  })
