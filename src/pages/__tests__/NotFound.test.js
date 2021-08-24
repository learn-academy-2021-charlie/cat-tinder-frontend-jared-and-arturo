import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';
import NotFound from '../NotFound';

Enzyme.configure({ adapter: new Adapter() });

describe('When routed to not found page', () => {
  const fourOhFour = shallow(<NotFound />)
  it('contains 404.jpg image', () => {
    let img = fourOhFour.find('img')
    expect(img.props().src).toContain('404.jpg')
  })
})
