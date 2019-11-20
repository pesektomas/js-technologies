import React from 'react';
import ReactDOM from 'react-dom';
import TestElement from './Components/TestElement';

console.log('hello react');

const title = 'React with Webpack and Babel';
ReactDOM.render(
	<TestElement title={title} />,
	document.getElementById('test-element')
);
