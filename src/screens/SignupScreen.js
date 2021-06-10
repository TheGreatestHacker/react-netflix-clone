import React, { useRef } from "react"
import { auth } from "../firebase"
import "./SignupScreen.css"

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authuser) => {
            console.log(authuser);
        }).catch((error) => {
            alert(error.message);
        })
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authuser) => {
            console.log(authuser);
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={register}>Signup now.</span>
                    
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
