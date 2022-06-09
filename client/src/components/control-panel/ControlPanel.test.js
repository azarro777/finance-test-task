import React from 'react';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux';
import {ControlPanel} from './ControlPanel';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('controlPanel', () => {
	let useEffect;

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce(f => f());
	};

	const mockStore = configureMockStore([thunk])([]);;
	const store = mockStore;

	useEffect = jest.spyOn(React, 'useEffect');
	mockUseEffect();
	mockUseEffect();
	
	shallow(<Provider store={store}><ControlPanel /></Provider>)

	describe("on mount", () => {
    it("dispatch search action to store", () => {
      const actions = store.getActions();
      expect(actions).toEqual([]);
    });
  });
});
