import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import { useRouter } from "next/router";
import { Toast } from 'react-bootstrap';

export default function addbalance() {
    const [addBal, setAddBal] = React.useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const handleAddBalance = async (event) => {
        event.preventDefault();

        const uid = localStorage.getItem('uid')
        const username = localStorage.getItem('usrnme')

        // Make the API request with the provided username and password
        let api = "https://bnbdevelopers-test-apis.vercel.app/addbalance?usrnme=" + username + "&uid=" + uid + "&addMoney=" + addBal;

        try {
            const response = await fetch(api);

            // Check if the response is successful (HTTP status code in the 200-299 range)
            if (response.ok) {
                // Parse the response as JSON
                const data = await response.json();

                // Check if the login was successful
                if (data.isSuccess === "True") {
                    // Perform actions for successful login, e.g., redirect to logged-in page
                    localStorage.setItem('balance', data.details.balance);
                    console.log(localStorage.getItem('balance'))
                    setAddBal("")
                    console.log("Money added successful");
                    setToastMessage('Money added succesfully');
                    setShowToast(true);
                } else {
                    // Handle unsuccessful login
                    console.log(data.msg);
                    setToastMessage(data.msg);
                    setShowToast(true);
                }
            } else {
                // Handle error responses
                console.log("Try Again");
                setToastMessage('Try Again');
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
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">E-Ticket</span>
                </div>
            </nav>

            <h1 className='bal-pg-title'>Add Balance</h1>
                <hr className='hr-login-pg' />

            <form className='login-form container'>
                <div className="form-row">
                    <div className="form-group col-md-6 inp-fld-1">
                        <label htmlFor="inputNumber">Amount</label>
                        <input type="number" className="form-control" id="inputNumber" placeholder="Amount" value={addBal} onChange={(e) => setAddBal(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary login-btn-login-pg rounded-pill" onClick={handleAddBalance}>Add</button>
                <br /><br />
            </form>

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
