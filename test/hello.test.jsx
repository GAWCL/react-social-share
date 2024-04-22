import React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './../index';

it('should render with empty props', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Hello />, div);
	expect(div.textContent).toBe('Hello World');
	ReactDOM.unmountComponentAtNode(div);
});
