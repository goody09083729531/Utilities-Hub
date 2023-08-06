import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

const NoNavbarLayout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Utilities Hub</title>
      </Head>
      <>
        {children}
      </>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default NoNavbarLayout;