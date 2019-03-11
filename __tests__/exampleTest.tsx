import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

const wrapped = shallow(<App />);

it('works', () => {
      expect(wrapped.filter(Text).length).toBe(1);
    });