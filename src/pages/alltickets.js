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

              
            <h2 className='latest-ticket-heading'>Your Tickets</h2>

            <div className="latest-ticket">
                <div className="ticket-details-date">
                    <p className='ticket-details'><b>Date:</b>{Date} 21-4-2023</p>
                    <p className='ticket-details'><b>Time:</b> 10:30</p>
                </div>
                <div>
                    <p className='ticket-details'><b>From:</b> Hadapsar</p>
                    <p className='ticket-details'><b>To:</b> Swargate</p>
                </div>
                <p className='ticket-details'>Fare: 20</p>

            </div>
            <div className="latest-ticket">
                <div className="ticket-details-date">
                    <p className='ticket-details'><b>Date:</b>{Date} 27-4-2023</p>
                    <p className='ticket-details'><b>Time:</b> 4:30</p>
                </div>
                <div>
                    <p className='ticket-details'><b>From:</b> Shivaji Nagar</p>
                    <p className='ticket-details'><b>To:</b> Katraj</p>
                </div>
                <p className='ticket-details'>Fare: 20</p>

            </div>
            <div className="latest-ticket">
                <div className="ticket-details-date">
                    <p className='ticket-details'><b>Date:</b>{Date} 30-5-2023</p>
                    <p className='ticket-details'><b>Time:</b> 7:45</p>
                </div>
                <div>
                    <p className='ticket-details'><b>From:</b> Wagholi</p>
                    <p className='ticket-details'><b>To:</b> Viman Nagar</p>
                </div>
                <p className='ticket-details'>Fare: 15</p>

            </div>

        </>
    )
}
