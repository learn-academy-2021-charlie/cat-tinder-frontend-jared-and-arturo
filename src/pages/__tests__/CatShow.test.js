import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import CatShow from '../CatShow.js';

Enzyme.configure({ adapter: new Adapter() });


describe('When the index page loads', () => {
    it('contains a div element', () => {
      expect(shallow(<CatShow />).find('div').length).toEqual(1)
    })
  })
