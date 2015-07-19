import React from 'react';

class Example extends React.Component {
	render() {
		return <b>This is example</b>;
	}
}

React.render(
	<Example />,
	document.getElementById('app'));
