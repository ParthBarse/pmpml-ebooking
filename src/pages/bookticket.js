// import React, { useState } from 'react';
// import { useEffect } from "react";
// import Image from 'next/image'
// import Link from 'next/link';
// import mypic from '../images/bus-img.png'
// import { useRouter } from "next/router";
// import { Toast } from 'react-bootstrap';

// export default function BusStopList() {
//     const busstops = ['shaniwarwada', 'MANAPA', 'Swarget', "Deccan", "Pune Station", "Katraj", "Shivaji Nagar Railway Station", "COEP Hostel", "Shivaji Maharaj Putala", "Dengale Pul", "Kumbhar Wada", "Gadital Juna Bazar", "Sasoon Hospital"];
//     const [searchText, setSearchText] = useState('');
//     const [selectedStop, setSelectedStop] = useState('');

//     const [username, setUsername] = useState(null);
//     const [uid, setUid] = useState(null);
//     const [balance, setBalance] = useState(null);
//     const [pic_url, setPic_Url] = useState(null);
//     useEffect(() => {
//         // Perform localStorage action
//         const username = localStorage.getItem('usrnme')
//         const uid = localStorage.getItem('uid')
//         const balance = localStorage.getItem('balance')
//         const pic_url = localStorage.getItem('pic_url')
//         setUsername(username);
//         setUid(uid);
//         setBalance(balance);
//         setPic_Url(pic_url);
//     }, [])

//     const filteredBusStops = busstops.filter((busstop) =>
//         busstop.toLowerCase().includes(searchText.toLowerCase())
//     );

//     const handleSelect = (stop) => {
//         setSelectedStop(stop);
//         setSearchText(stop);
//     }

//     return (
//         <>
//             <style jsx>
//                 {`
//           img {
//             border-radius: 50%;
//           }
//         `}
//             </style>
//             <nav className="navbar bg-body-tertiary">
//                 <div className="container-fluid">
//                     <span className="navbar-brand mb-0 h1">E-Ticket</span>
//                 </div>
//             </nav>

//             <div className="container profile-sm">
//                 <div className="userInfoSm">
//                     <div className="username-bookticket">
//                         <h2 className="username">{username}</h2>
//                     </div>
//                     <div className="balanceInfo-sm">
//                         <p className="balance">Balance : ₹</p>
//                         <p className="balanceValue">{balance}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <input
//                     type="text"
//                     placeholder="From..."
//                     value={searchText}
//                     onChange={(event) => setSearchText(event.target.value)}
//                 />
//                 <ul>
//                     {filteredBusStops.map((busstop, index) => (
//                         <p className='bus-options' key={index} onClick={() => handleSelect(busstop)}>{busstop}</p>
//                     ))}
//                 </ul>

//                 <input
//                     type="text"
//                     placeholder="To..."
//                     value={searchText}
//                     onChange={(event) => setSearchText(event.target.value)}
//                 />
//                 <ul>
//                     {filteredBusStops.map((busstop, index) => (
//                         <p className='bus-options' key={index} onClick={() => handleSelect(busstop)}>{busstop}</p>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// }

import React, { useState } from 'react';
import { useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import mypic from '../images/bus-img.png'
import { useRouter } from "next/router";
import { Toast } from 'react-bootstrap';

export default function BusStopList() {
    const busstops = ['shaniwarwada', 'MANAPA', 'Swarget', "Deccan", "Pune Station", "Katraj", "Shivaji Nagar Railway Station", "COEP Hostel", "Shivaji Maharaj Putala", "Dengale Pul", "Kumbhar Wada", "Gadital Juna Bazar", "Sasoon Hospital"];
    const [searchText_1, setSearchText_1] = useState('');
    const [selectedStop_1, setSelectedStop_1] = useState('');

    const [searchText_2, setSearchText_2] = useState('');
    const [selectedStop_2, setSelectedStop_2] = useState('');

    const [searchText_price, setSearchText_price] = useState('');
    const [selectedStop_price, setSelectedStop_price] = useState('');

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

    const filteredBusStops_1 = busstops.filter((busstop_1) =>
        busstop_1.toLowerCase().includes(searchText_1.toLowerCase())
    );

    const handleSelect_1 = (stop) => {
        setSelectedStop_1(stop);
        setSearchText_1(stop);
    }

    const filteredBusStops_2 = busstops.filter((busstop_2) =>
        busstop_2.toLowerCase().includes(searchText_2.toLowerCase())
    );

    const handleSelect_2 = (stop) => {
        setSelectedStop_2(stop);
        setSearchText_2(stop);
    }

    return (
        <>
            <style jsx>
                {`
          img {
            border-radius: 50%;
          }
        `}
            </style>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">E-Ticket</span>
                </div>
            </nav>

            <div className="container profile-sm">
                <div className="userInfoSm">
                    <div className="username-bookticket">
                        <h2 className="username">{username}</h2>
                    </div>
                    <div className="balanceInfo-sm">
                        <p className="balance">Balance : ₹</p>
                        <p className="balanceValue">{balance}</p>
                    </div>
                </div>
            </div>

            <div className="login-form container">
                <div className="form-row">
                    <div className="form-group col-md-6 inp-fld-1">
                        <input
                            type="text"
                            placeholder="From..."
                            value={searchText_1}
                            onChange={(event) => setSearchText_1(event.target.value)}
                            className="form-control"
                        />
                        {searchText_1.length > 0 && (
                            <ul>
                                {filteredBusStops_1.map((busstop, index) => (
                                    <p className='bus-options' key={index} onClick={() => handleSelect_1(busstop)}>{busstop}</p>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="form-group col-md-6 inp-fld-2">
                        <input
                            type="text"
                            placeholder="To..."
                            value={searchText_2}
                            onChange={(event) => setSearchText_2(event.target.value)}
                            className="form-control"
                        />
                        {searchText_2.length > 0 && (
                            <ul>
                                {filteredBusStops_2.map((busstop, index) => (
                                    <p className='bus-options' key={index} onClick={() => handleSelect_2(busstop)}>{busstop}</p>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="form-group col-md-6 inp-fld-2">
                        <input
                            type="number"
                            placeholder="Price..."
                            value={searchText_price}
                            onChange={(event) => setSearchText_price(event.target.value)}
                            className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary login-btn-login-pg rounded-pill">Book</button>
                </div>
            </div>
        </>
    );
}
