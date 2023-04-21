import React from 'react';
import AuthButton from "../../../../components/buttons/AuthButton";

class SignUpRegisterEmailPage extends React.Component {
    render() {
        return (
            <div style={{ marginTop: 25, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Hello world register email page
                <AuthButton
                    text={"Continue"}
                    to={"/sign-up/account-verification"}
                />
            </div>
        )
    }
}

export default SignUpRegisterEmailPage;