import React, { useState, useEffect } from 'react';
import RegisterEmail from './components/SignUpRegisterEmailPage';
import CreateAccount from './components/SignUpCreateAccountPage';
import AccountVerifcation from './components/SignupVerificationCodePage';
import SuccessCreateAccount from './components/SignUpSuccessPage';
import BusinessType from './components/SignupBusinessTypePage';

function SignUpDetailPage(props) {
	const { history, location } = props;

	const path = location.pathname.split('/');
	const pathname = path[path.length - 1];

	const _getSpecificComponent = () => {
		switch (true) {
			case (pathname === 'register-email'):
				return <RegisterEmail {...props} />;
			case (pathname === 'account-verification'):
				return <AccountVerifcation {...props} />;
			case (pathname === 'create-account'):
				return <CreateAccount {...props} />;
			case (pathname === 'success-create-account'):
				return <SuccessCreateAccount {...props} />;
			case (pathname === 'choose-business-type'):
				return <BusinessType {...props} />;
			default:
				history.push('/');
		}
	};

	return (
		<React.Fragment>
			{_getSpecificComponent()}
		</React.Fragment>
	);
}

export default SignUpDetailPage;
