import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Utilities Hub</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <>
        {children}
      </>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;