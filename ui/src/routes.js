import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AuthHelper from './helpers/auth';

import LandingPage from "./pages/LandingPage/LandingPage";

import ServicesPage from "./pages/ServicesPage/ServicesPage";

import SignInPage from "./pages/SignInPage/SignInPage";

import SignUpPageStep1 from "./pages/SignUpPage/SignUpPageStep1";

import SignUpPageStep2 from "./pages/SignUpPage/components/SignUpPageStep2";

import SignUpVerificationPage from "./pages/SignUpVerificationPage/SignUpVerificationPage";

import SignUpVerificationStep2 from "./pages/SignUpVerificationPage/component/SignUpVerificationStep2";

import SignUpSuccessPage from "./pages/SignUpSuccessPage/SignUpSuccessPage";

import MerchantCategorySelectPage from "./pages/MerchantCategorySelectPage/MerchantCategorySelectPage";

import MerchantSetupPage from "./pages/MerchantSetupPage/MerchantSetupPage";

import SignUpDetailPage from "./pages/SignUpDetailPage";


/* layouts */
import BasicLayout from './layouts/basic-layout';
import SignupStepsLayout from './layouts/signup-steps-layout';


const routes = [
    { path: '/', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: LandingPage },

    { path: '/services', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: ServicesPage },

    { path: '/sign-in', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: SignInPage },

    { path: '/sign-up', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: SignUpPageStep1 },
    
    { path: '/sign-up-step-2', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: SignUpPageStep2 },

    { path: '/sign-up-verification', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: SignUpVerificationPage },

    { path: '/sign-up-verification-2', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: SignUpVerificationStep2 },

    { path: '/sign-up-success', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: SignUpSuccessPage },

    { path: '/merchant-category-select', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: MerchantCategorySelectPage },

    { path: '/merchant-setup', exact: true, isPrivate: false, Layout: BasicLayout, layoutClass: 'narrow', Component: MerchantSetupPage },

    // Signup Routes
    { path: '/sign-up/register-email', exact: true, isPrivate: false, Layout: SignupStepsLayout, layoutClass: 'narrow', Component: SignUpDetailPage },
	{ path: '/sign-up/account-verification', exact: true, isPrivate: false, Layout: SignupStepsLayout, layoutClass: 'narrow', Component: SignUpDetailPage },
	{ path: '/sign-up/create-account', exact: true, isPrivate: false, Layout: SignupStepsLayout, layoutClass: 'narrow', Component: SignUpDetailPage },
	{ path: '/sign-up/success-create-account', exact: true, isPrivate: false, Layout: SignupStepsLayout, layoutClass: 'narrow', Component: SignUpDetailPage },
	{ path: '/sign-up/choose-business-type', exact: true, isPrivate: false, Layout: SignupStepsLayout, layoutClass: 'narrow', Component: SignUpDetailPage },
];

function getRedirectedPath(location) {
	if (location.pathname.split('?')[0] === '/login' && location.pathname.split('?').length > 1) {
		return location.pathname + location.search + location.hash;
	}

	// skip the redirection from these routes
	if (['/login', '/logout'].indexOf(location.pathname.split('?')[0]) !== -1) {
		return '/login';
	}
	return `/login?path=${location.pathname + location.search + location.hash}`;
}

const PrivateRoute = ({ layout: Layout, layoutClass, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (AuthHelper.isAuthenticated()) {
				return (
					<Layout containerClass={layoutClass}>
						<Component {...props} />
					</Layout>
				);
			} else {
				return (
					<Redirect
						to={{
							pathname: getRedirectedPath(props.location),
							state: { from: props.location }
						}}
					/>
				);
			}
		}}
	/>
);

export class Routes extends Component {
	render() {
		const { location } = this.props;
		return (
			<Switch location={location}>
				{routes.map(({ path, exact, isPrivate, Layout, layoutClass, Component }) => {
					if (isPrivate) {
						return <PrivateRoute
							key={0}
							path={path}
							exact={exact}
							layout={Layout}
							layoutClass={layoutClass}
							component={Component}
						       />;
					} else {
						return (
							<Route
								key={0}
								path={path}
								exact={exact}
								render={props => (
									<Layout
										containerClass={layoutClass}
										location={location}
									>
										<Component {...props} />
									</Layout>
								)}
							/>
						);
					}
				})}
				<Route render={props => AuthHelper.isAuthenticated() ? <Redirect to={'/merchants-page-or-user-page'} /> : <Redirect to={getRedirectedPath(props.location)} />} />
			</Switch>
		);
	}
}

export default withRouter(Routes);