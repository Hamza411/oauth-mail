import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({        /* ayns actions or async api req*/
                clientId: "1075903194307-lgglf5n8qsk3lfhr2j4k4512k60scmh7.apps.googleusercontent.com",
                scope: "https://mail.google.com/",
                setApiKey: "AIzaSyDqTkgLrbg4aJy9bPhT2iL5ETNJ43y6CB4",
            }).then(() => {
                // console.log(window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }


    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const id = this.auth.currentUser.get().getId();
            const email = this.auth.currentUser.get().getBasicProfile().getEmail()
            const token = this.auth.currentUser.get().getAuthResponse().access_token
            localStorage.setItem("token", token);
            localStorage.setItem("email", email);
            this.props.signIn(id, email);
            // console.log("Complete Object", this.auth.currentUser.get());
            // console.log("id", this.auth.currentUser.get().getId());
            // console.log("Email", this.auth.currentUser.get().getBasicProfile().getEmail());
            // console.log("access token", token)

        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {

        this.auth.signOut();
        localStorage.clear();
        window.location.reload()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn) {
            return (
                <button className=" ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    SignOut
                </button>
            )
        }
        else {
            return (
                <button className=" ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    SignIn
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);