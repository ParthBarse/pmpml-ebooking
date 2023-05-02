import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import mypic from '../images/bus-img.png'

export default function login() {
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
                            <label for="inputNumber">Phone Number</label>
                            <input type="number" className="form-control" id="inputNumber" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group col-md-6 inp-fld-2">
                            <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn-login-pg rounded-pill">Login</button>
                </form>
                <p className="para-text">
                    Don't have an Account ?
                    <br />
                    <Link href="/register">
                    Create here
                    </Link>
                </p>
            </div>
        </>
    )
}
