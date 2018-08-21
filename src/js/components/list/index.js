// Library
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';

// Components
import ListItem from './item';

export default class List extends React.PureComponent {
	render() {
		const {data: aData} = this.props;
		return (
			<ListGroup>
				{
					Array.isArray(aData) && aData.map(({sName, sComment}, iIndex) => (
						<ListItem key={iIndex} name={sName} comment={sComment}/>
					))
				}
				{this.props.children}
			</ListGroup>
		);
	}
}

List.displayName = 'List';

List.propTypes = {
	data: PropTypes.array,
	children: PropTypes.any
};

List.defaultProps = {
	data: [{
		sName: 'Lorem',
		sComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas nibh nec lectus aliquam varius. Ut lectus nibh, fringilla a nibh eget, hendrerit ultrices arcu. Cras interdum ligula sed euismod scelerisque. Nam tincidunt enim risus, in malesuada magna vestibulum nec. Suspendisse semper mattis justo, non rutrum odio porta non. Etiam sit amet consectetur nisl, quis convallis mauris. Sed a fringilla nisi, sed rhoncus tortor. Morbi ac odio quis orci scelerisque pretium.'
	}]
};
