// Library
import React from 'react';
import PropTypes from 'prop-types';

export default class UserAvatar extends React.PureComponent {
	render() {
		const {name: sName} = this.props;
		if (typeof sName !== 'string' || sName.length === 0) {
			return null;
		}

		return (
			<div className="user-avatar">
				{sName.charAt(0).toUpperCase()}
			</div>
		);
	}
}

UserAvatar.displayName = 'UserAvatar';

UserAvatar.propTypes = {
	name: PropTypes.string
};

UserAvatar.defaultProps = {
	name: '?'
};
