import React from 'react'
import Image from 'next/image'
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
                            <label for="inputEmail4">Phone Number</label>
                            <input type="number" className="form-control" id="inputEmail4" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group col-md-6 inp-fld-2">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn rounded-pill">Login</button>
                </form>
                <p className="para-text">
                    Don't have an Account ?
                    <br />
                    <a href="/register">
                    Create here
                    </a>
                </p>
            </div>
        </>
    )
}
