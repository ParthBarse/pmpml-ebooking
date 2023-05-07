import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import mypic from '../images/bus-img.png'
import { useRouter } from "next/router";
import { Toast } from 'react-bootstrap';

export default function register() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phnNum, setPhnNum] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(username)
        // Make the API request with the provided user details
        const api = "https://bnbdevelopers-test-apis.vercel.app/addUser";
        const data = {
            usrnme: username,
            email: email,
            pwd: password,
            phone: phnNum,
        }
        try {
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                console.log('Failed to register. Please try again.');
                return;
            }
            const responseData = await response.json();
            if (responseData.isSuccess === 'True') {
                console.log('Registration successful');
                setToastMessage(responseData.msg);
                setShowToast(true);
                router.push("/login");
                // Redirect to the next page or show a success message here
            } else {
                console.log('Registration failed. Please try again.');
                setToastMessage(responseData.msg);
                setShowToast(true);
                // Show an error message here
            }
        } catch (error) {
            // Handle any errors that occurred during the registration request
            setError(error.message);
            console.log(error.message);
            setToastMessage(error.message);
            setShowToast(true);
        }
    }
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
                <h1 className='reg-pg-title'>Register</h1>
                <hr className='hr-login-pg' />

                <form className='reg-form container'>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-reg-1">
                            <label for="inputName">Userame</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Userame" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6 inp-fld-reg-2">
                            <label for="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-reg-1">
                            <label for="inputNumber">Phone Number</label>
                            <input type="number" className="form-control" id="inputNumber" placeholder="Phone Number" value={phnNum} onChange={(e) => setPhnNum(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6 inp-fld-reg-2">
                            <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-reg-2">
                            <label for="inputRePassword">Re-Password</label>
                            <input type="password" className="form-control" id="inputRePassword" placeholder="Re-Password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn-login-pg rounded-pill" onClick={handleRegister}>Register</button>
                </form>
                <p className="para-text">
                    Already have an Account ?
                    <br />
                    <Link href="/login">
                        Login
                    </Link>
                </p>
            </div>

            <center>
                <Toast show={showToast} onClose={() => setShowToast(false)} className="toast-error">
                    <Toast.Header>
                        <strong className="mr-auto toast">Error</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </center>
        </>
    )
}
'"'