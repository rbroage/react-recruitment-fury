// Library
import React from 'react';
import PropTypes from 'prop-types';

// Component
import UserAvatar from './userAvatar';

export default class ListItem extends React.PureComponent {
	render() {
		const {name: sName, comment: sComment} = this.props;

		return (
			<div className="media comment">
				<div className="media-left">
					<UserAvatar name={sName}/>
				</div>

				<div className="media-body text-left">
					{sComment}
				</div>
			</div>
		);
	}
}

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
	name: PropTypes.string,
	comment: PropTypes.any
};
