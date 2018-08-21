// Library
import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

// Router
import {RoutingButton} from '../router';

// Components
import Header from '../components/header';
import Logo from '../components/header/logo';

export default class Main extends React.PureComponent {
	render() {
		return (
			<div className="app">
				<Header>
					<Logo/>
				</Header>
				<Grid>
					<Jumbotron>
						<h1>Hello, world!</h1>
						<p>
							This is a simple hero unit, a simple jumbotron-style component for calling
							extra attention to featured content or information.
						</p>
						<p>
							<RoutingButton destination="contact" bsStyle="primary">
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
