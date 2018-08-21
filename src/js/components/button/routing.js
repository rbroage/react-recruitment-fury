// Library
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

export default class RoutingButton extends React.PureComponent {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const {destination: sDestination, onChangePage} = this.props;
		if (typeof onChangePage === 'function') {
			onChangePage(sDestination);
		}
	}

	render() {
		return (
			<Button
				className={this.props.className}
				bsStyle={this.props.bsStyle}
				style={this.props.style}
				onClick={this.handleClick}
				>
				{this.props.children}
			</Button>
		);
	}
}

RoutingButton.displayName = 'RoutingButton';

RoutingButton.propTypes = {
	onChangePage: PropTypes.func,
	destination: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	bsStyle: PropTypes.string,
	style: PropTypes.object
};
