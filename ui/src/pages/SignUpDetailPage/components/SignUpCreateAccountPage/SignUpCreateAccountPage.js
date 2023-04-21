import React from 'react';
import AuthButton from "../../../../components/buttons/AuthButton";

class SignUpCreateAccountPage extends React.Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 25, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Hello world SignUpCreateAccountPage</div>
                <AuthButton
                    text={"Continue"}
                    to={"/sign-up/success-create-account"}
                />
            </div>
        )
    }
}

export default SignUpCreateAccountPage;