// Library
import React from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

// Components
import Header from '../components/header';

export default class Contact extends React.PureComponent {
	render() {
		return (
			<div className="app">
				<Header/>
				<Grid>
					<Jumbotron>
						<p className="text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas nibh nec lectus aliquam varius. Ut lectus nibh, fringilla a nibh eget, hendrerit ultrices arcu. Cras interdum ligula sed euismod scelerisque. Nam tincidunt enim risus, in malesuada magna vestibulum nec. Suspendisse semper mattis justo, non rutrum odio porta non. Etiam sit amet consectetur nisl, quis convallis mauris. Sed a fringilla nisi, sed rhoncus tortor. Morbi ac odio quis orci scelerisque pretium.
						</p>
						<p className="text-left">
							Praesent molestie lectus at arcu molestie, mollis malesuada ante laoreet. Morbi vel ante est. Proin eget bibendum leo. In convallis bibendum mauris sit amet bibendum. Aenean commodo, massa ac pharetra faucibus, nisl ex luctus tellus, id iaculis lorem ipsum nec ante. Nullam vehicula, mi ut faucibus mattis, neque mi convallis massa, eu dapibus odio justo id enim. Pellentesque sed tortor consequat augue laoreet vulputate non accumsan augue. Nunc elementum augue sem, quis semper sem posuere eget. Curabitur tincidunt pulvinar dui sit amet ultricies. Vestibulum hendrerit, sapien sed semper faucibus, sapien mi euismod lorem, ac volutpat tellus velit eu felis. Proin lobortis, diam aliquam tincidunt lobortis, neque nulla cursus orci, in auctor ex nulla id lorem. Maecenas nibh risus, auctor sit amet lobortis at, interdum ultrices enim. Sed dapibus non nisi sit amet finibus. Maecenas consequat iaculis imperdiet.
						</p>
					</Jumbotron>
				</Grid>
			</div>
		);
	}
}

Contact.displayName = 'Contact';
