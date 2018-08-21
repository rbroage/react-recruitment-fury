// Library
import React from 'react';
import PropTypes from 'prop-types';

// Component
import Logo from './logo';

export default class Header extends React.PureComponent {
	render() {
		const {title: sTitle} = this.props;
		return (
			<header className="app-header">
				<Logo/>
				<h1 className="app-title">{sTitle}</h1>
			</header>
		);
	}
}

Header.displayName = 'Header';

Header.propTypes = {
	title: PropTypes.string
};

Header.defaultProps = {
	title: 'Homepage'
};
