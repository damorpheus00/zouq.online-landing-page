import React from 'react';
import AuthButton from "../../../../components/buttons/AuthButton";

class SignupVerificationCodePage extends React.Component {
    render() {
        return (
            <div style={{ marginTop: 25, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Hello world verifcation page
                <AuthButton
                    text={"Continue"}
                    to={"/sign-up/create-account"}
                />
            </div>
        )
    }
}

export default SignupVerificationCodePage;