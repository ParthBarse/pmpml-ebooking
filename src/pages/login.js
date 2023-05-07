import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import mypic from '../images/bus-img.png'
import { useRouter } from "next/router";
import { Toast } from 'react-bootstrap';


export default function login() {
    const router = useRouter();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);

        // Make the API request with the provided username and password
        let api = "https://bnbdevelopers-test-apis.vercel.app/signIn?usrnme=" + username + "&pwd=" + password;

        try {
            const response = await fetch(api);

            // Check if the response is successful (HTTP status code in the 200-299 range)
            if (response.ok) {
                // Parse the response as JSON
                const data = await response.json();

                // Check if the login was successful
                if (data.isSuccess === "True") {
                    // Perform actions for successful login, e.g., redirect to logged-in page
                    console.log("Login successful");
                    router.push("/dashboard");
                } else {
                    // Handle unsuccessful login
                    console.log("Login failed. Please check your credentials.");
                    setToastMessage('Failed to login. Please check your credentials.');
                    setShowToast(true);
                }
            } else {
                // Handle error responses
                console.log("Failed to login. Please check your credentials.");
                setToastMessage('Failed to login. Please check your credentials.');
                setShowToast(true);
            }
        } catch (error) {
            // Handle any errors that occurred during the login request
            setError(error.message);
            console.log(error.message);
            setToastMessage(error.message);
            setShowToast(true);
        }
    };
    return (
        <>
            <div className="watermark">
                <div className="watermark__inner">
                    {/* <div className="watermark__body">Draft</div> */}
                    <Image
                        src={mypic}
                        alt="image"
                    />
                </div>
            </div>

            <div className="container">
                <h1 className='login-pg-title'>User Login</h1>
                <hr className='hr-login-pg' />

                <form className='login-form container'>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-1">
                            <label htmlFor="inputNumber">Phone Number</label>
                            <input type="text" className="form-control" id="inputNumber" placeholder="Phone Number" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6 inp-fld-2">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn-login-pg rounded-pill" onClick={handleLogin}>Login</button>
                </form>
                <p className="para-text">
                    Don't have an Account ?
                    <br />
                    <Link href="/register">
                        Create here
                    </Link>
                </p>
                <br></br>
                <center>
                    <Toast show={showToast} onClose={() => setShowToast(false)} className="toast-error">
                        <Toast.Header>
                            <strong className="mr-auto toast">Error</strong>
                        </Toast.Header>
                        <Toast.Body>{toastMessage}</Toast.Body>
                    </Toast>
                </center>
            </div>
        </>
    )
}
