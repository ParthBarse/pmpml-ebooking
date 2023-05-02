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
                <h1 className='reg-pg-title'>Register</h1>
                <hr className='hr-login-pg' />

                <form className='reg-form container'>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-reg-1">
                            <label for="inputName">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                        </div>
                        <div className="form-group col-md-6 inp-fld-reg-2">
                            <label for="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-reg-1">
                            <label for="inputNumber">Phone Number</label>
                            <input type="number" className="form-control" id="inputNumber" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group col-md-6 inp-fld-reg-2">
                            <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 inp-fld-reg-2">
                            <label for="inputRePassword">Re-Password</label>
                            <input type="password" className="form-control" id="inputRePassword" placeholder="Re-Password"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn-login-pg rounded-pill">Register</button>
                </form>
                <p className="para-text">
                    Already have an Account ?
                    <br />
                    <Link href="/login">
                        Login
                        </Link>
                </p>
            </div>
        </>
    )
}
