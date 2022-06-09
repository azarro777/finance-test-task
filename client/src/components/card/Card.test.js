import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Testing <Card/>', () => {
	it('Card have rendered correctly', () => {
		const card = shallow(<Card/>);
		expect(card).toMatchSnapshot();
	});
});