import Image from 'next/image'
import mypic from '../images/bus-img.png'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div class="watermark">
        <div class="watermark__inner">
          {/* <div class="watermark__body">Draft</div> */}
          <Image
            src={mypic}
            alt="image"
          />
        </div>
      </div>
      <div className="container">
        <h1 className='heading'>PMPML</h1>
        <h2 className='sub-heading'>E-Ticket</h2>

        <h2 className='title'>User Login</h2>
        <hr className='hr-login-pg' />

        <center className='login-btns'>
          <a href="/login"><button type="button" class="btn login-btn rounded-pill">Login</button></a>
          <br />
          <button type="button" class="btn reg-btn rounded-pill">Register</button>
        </center>
      </div>
    </>
  )
}
