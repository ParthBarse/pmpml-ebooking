import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import mypic from '../images/bus-img.png'
import { useRouter } from "next/router";
import { Toast } from 'react-bootstrap';

export default function dashboard() {
    const [username, setUsername] = useState(null);
    const [uid, setUid] = useState(null);
    const [balance, setBalance] = useState(null);
    const [pic_url, setPic_Url] = useState(null);
    useEffect(() => {
        // Perform localStorage action
        const username = localStorage.getItem('usrnme')
        const uid = localStorage.getItem('uid')
        const balance = localStorage.getItem('balance')
        const pic_url = localStorage.getItem('pic_url')
        setUsername(username);
        setUid(uid);
        setBalance(balance);
        setPic_Url(pic_url);
    }, [])
    return (
        <>
            {/* <style jsx>
            {
                `
                img{
                    border-radius:50%
                }
                `
            }
        </style> */}
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">E-Ticket</span>
                </div>
            </nav>

            <div className="profile">
                <img src={pic_url} alt="Avatar" height={100} style={{ borderRadius: 50, margin: 20 }} />

                <div className="userInfo">
                    <h2 className='username'>{username}</h2>
                    <div className="idInfo">
                        <p className="uid">ID : </p>
                        <p className="idValue">{uid}</p>
                    </div>
                    <div className='balanceDiv'>
                        <div className="balanceInfo">
                            <p className="balance">Balance : ₹</p>
                            <p className="balanceValue">{balance}</p>
                        </div>
                        <div className="addBal">
                            <Link href="/addbalance">
                                <button type="submit" className="btn btn-primary add-bal-btn rounded-pill">Add Balance</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='latest-ticket-heading'>Last Ticket</h2>

            <div className="latest-ticket">
                <div className="ticket-details-date">
                    <p className='ticket-details'>Date:{Date}</p>
                    <p className='ticket-details'>Time:</p>
                </div>
                <div>
                    <p className='ticket-details'>From:</p>
                    <p className='ticket-details'>To:</p>
                </div>
                <p className='ticket-details'>Fare:</p>

            </div>

            <div className="end-buttons-1">
            <Link href="/bookticket"><button type="submit" className="btn btn-success book-ticket-btn rounded-pill">Book Ticket</button></Link>
            </div>
            <div className="end-buttons-2">
            <Link href="/alltickets"><button type="submit" className="btn btn-primary your-ticket-btn rounded-pill">Your Tickets</button></Link>
            </div>

        </>
    )
}
