// Library
import React from 'react';

// Component
import Route from './route';
import RoutingButton from './button';

class Router extends React.PureComponent {
	constructor(oProps) {
		super(oProps);

		this.state = {
			sRoute: '',
			oRoutes: {}
		};

		this.handleChangeRoute = this.handleChangeRoute.bind(this);
		this.readRouteChild = this.readRouteChild.bind(this);

		this.readRouteChild(oProps.children);

		// setup Button
		RoutingButton.handleChangeRoute = this.handleChangeRoute;
	}

	componentWillReceiveProps(oNextProps) {
		this.readRouteChild(oNextProps.children);
	}

	handleChangeRoute(sRoute = '') {
		const {oRoutes} = this.state;
		const oMatchingRoute = oRoutes[sRoute];
		if (oMatchingRoute === undefined) {
			// reset routing
			sRoute = '';
		}

		this.setState({sRoute});
	}

	readRouteChild(oChild) {
		if (React.isValidElement(oChild) === false) {
			if (Array.isArray(oChild) === true) {
				oChild.forEach(this.readRouteChild, this);
			}
			return;
		}

		if (oChild.type !== Route || typeof oChild.props !== 'object' || oChild.props === null) {
			// not the good component type
			return;
		}

		const {oRoutes} = this.state;
		const {name = '', component} = oChild.props;
		oRoutes[name] = component;
	}

	render() {
		const {sRoute, oRoutes} = this.state;

		if (typeof oRoutes[sRoute] === 'function') {
			return React.createElement(oRoutes[sRoute], {onChangePage: this.handleChangeRoute});
		}
		return null;
	}
}

Router.displayName = 'Router';

export {Route, Router, RoutingButton};
