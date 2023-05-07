import '@/styles/globals.css'
import Link from 'next/link';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  return( 
  <UserProvider >
  <Component {...pageProps} />
  </UserProvider>)
}
