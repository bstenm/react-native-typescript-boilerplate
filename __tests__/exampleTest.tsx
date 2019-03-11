import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import App from '../App';

const wrapped = shallow(<App />);

it('works', () => {
      expect(wrapped.find(Text).length).toBe(1);
      expect(wrapped.find(Text).childAt(0).text()).toBe("Welcome!");
    });