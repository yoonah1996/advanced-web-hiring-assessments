import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'; // ES6
import fetch from 'node-fetch';
import 'babel-polyfill';

import Signup from '../../client/src/pages/Signup';
import Login from '../../client/src/pages/Login';
import Mypage from '../../client/src/pages/Mypage';

global.fetch = fetch;

describe('component test', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('should ', () => {
    act(() => {});
    expect(1).toEqual(1);
  });
});

describe('authentication test', () => {});
