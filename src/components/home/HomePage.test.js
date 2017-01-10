import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from './HomePage';

let HomePage;

test.before(() => {
  HomePage = shallow(<HomeComponent />);
});

test('Should: Render Hello World Div', (t) => {
  t.true(HomePage.contains(<div>Hello World</div>));
});
