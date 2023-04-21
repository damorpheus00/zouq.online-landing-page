import React from 'react';
import AuthButton from "../../../../components/buttons/AuthButton";

class SignUpSuccessPage extends React.Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 25, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Hello world Success Page</div>
                <AuthButton
                    text={"Continue"}
                    to={"/sign-up/choose-business-type"}
                />
            </div>
        )
    }
}

export default SignUpSuccessPage;