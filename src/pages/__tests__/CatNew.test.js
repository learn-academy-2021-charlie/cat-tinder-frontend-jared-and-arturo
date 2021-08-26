import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import CatNew from '../CatNew.js';

Enzyme.configure({ adapter: new Adapter() });



describe('When the add new cat page loads', () => {
    it('contains a h3 element', () => {
      expect(shallow(<CatNew />).find("h3").text()).toEqual("Add a new cat!")
    })
  })

