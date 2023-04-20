import React, { useEffect, useState } from "react";
import SignInButton from "../buttons/SignInButton";
import OrDivider from "../dividers/OrDivider";
import googleIcon from "../../assets/images/google-icon.png";
import mailIcon from "../../assets/images/mail-icon.png";
import facebookIcon from "../../assets/images/fb-colored-logo.png";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// google
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function AuthCardItems({ type, typeOfCustomer }) {
    const [fbLogin, setFbLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setFbLogin(true);
        } else {
            setFbLogin(false);
        }
    };

    // google
    const [user, setUser] = useState({});
    const [profile, setProfile] = useState({});
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    return (
        <>
            <div className="flex basis-full justify-center xl:mb-12">
                <h2
                    className={`font-black text-center md:w-[14.688rem] ${
                        type === "sign-in" ? "xl:text-[2.5rem]" : "text-2xl"
                    }`}
                >
                    {type === "sign-in"
                        ? "Welcome Back!"
                        : `You're signing-up as as a ${typeOfCustomer}.`}
                </h2>
            </div>
            <div className="flex flex-col basis-full justify-center">
                {fbLogin && (
                    <img src={picture} className="h-5 w-5 rounded-full" />
                )}
                {fbLogin && (
                    <>
                        {" "}
                        {data.name}
                        {data.email}
                    </>
                )}
                {/* Google */}
                {/* {profile ? (
                    <div>
                        <img src={profile.picture} alt="user image" />
                        <h3>User Logged in</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <br />
                        <br />
                        <button onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <button onClick={() => login()}>
                        Sign in with Google 🚀{" "}
                    </button>
                )} */}
                <SignInButton
                    handleClick={login}
                    icon={googleIcon}
                    profile={profile}
                    alt={"google-icon"}
                    text={
                        type === "sign-in"
                            ? "Sign in with Google"
                            : "Sign up with Google"
                    }
                    type={type}
                />
                <SignInButton
                    icon={mailIcon}
                    alt={"mail-icon"}
                    text={"Use another email account"}
                    type={type}
                />
            </div>
            <OrDivider />
            <div className="flex justify-center">
                {!fbLogin && (
                    <FacebookLogin
                        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                        render={(renderProps) => (
                            <SignInButton
                                icon={facebookIcon}
                                alt={"fb-icon"}
                                text={
                                    type === "sign-in"
                                        ? "Sign in with Facebook"
                                        : "Sign up with Facebook"
                                }
                                type={type}
                                handleClick={renderProps.onClick}
                            />
                        )}
                    />
                )}
            </div>
        </>
    );
}
