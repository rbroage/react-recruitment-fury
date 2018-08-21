// Library
import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
	render() {
		const {title: sTitle} = this.props;
		return (
			<header className="app-header">
				{this.props.children}
				<h1 className="app-title">{sTitle}</h1>
			</header>
		);
	}
}

Header.displayName = 'Header';

Header.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any
};

Header.defaultProps = {
	title: 'Homepage'
};
