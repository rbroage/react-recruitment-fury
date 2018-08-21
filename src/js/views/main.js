// Library
import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Jumbotron} from 'react-bootstrap';

// Components
import Header from '../components/header';
import RoutingButton from '../components/button/routing';

export default class Main extends React.PureComponent {
	render() {
		const {onChangePage} = this.props;
		return (
			<div className="app">
				<Header/>
				<Grid>
					<Jumbotron>
						<h1>Hello, world!</h1>
						<p>
							This is a simple hero unit, a simple jumbotron-style component for calling
							extra attention to featured content or information.
						</p>
						<p>
							<RoutingButton onChangePage={onChangePage} destination="contact" bsStyle="primary">
								Go to page Contact
							</RoutingButton>
						</p>
					</Jumbotron>
				</Grid>
			</div>
		);
	}
}

Main.displayName = 'Main';

Main.propTypes = {
	onChangePage: PropTypes.func
};
