// Library
import React from 'react';

// Images
import logo from '../../../images/logo.svg';

export default class HeaderLogo extends React.PureComponent {
	render() {
		return (
			<img src={logo} className="app-logo" alt="logo"/>
		);
	}
}

HeaderLogo.displayName = 'HeaderLogo';

HeaderLogo.propTypes = {};
