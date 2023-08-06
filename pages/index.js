import React from 'react';

import { Layout, Navbar } from '../components';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="home-slider">
          <div className="wrapper">
            <div className="slide">
              <div className="content">
                <span>Convenience in Utility Settlement</span>
                <h3>The Utilities Hub</h3>
                <p>The One-Stop Solution to Payment of Utilities such as Electricity Bills, NECO and WAEC Result Tokens, Cable TV Subscription and Mobile Data/Airtime.</p>
                <Link href="#" className="btn">Pay Now</Link>
              </div>
              <div className="image">
                <Image src="/bg.png" alt="" width={2494} height={2745} layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="utilities" id="utilities">
        <h3 className="sub-heading">Our Services</h3>
        <h1 className="heading">All Utilities</h1>

        <div className="box-container">
          <div className="box">
            <Image src="/Waec Pic.jpg" alt="" width={0} height={0} layout="responsive" quality={100} />
            <h3>WAEC Result Token</h3>
            <Link href="#" className="btn">Buy Now</Link>
          </div>
          
          <div className="box">
            <Image src="/Neco Logo.jpg" alt="" width={0} height={0} layout="responsive" quality={100} />
            <h3>NECO Result Token</h3>
            <Link href="#" className="btn">Buy Now</Link>
          </div>

          <div className="box">
            <Image src="/dstv1.png" alt="" width={0} height={0} layout="responsive" quality={100} />
            <h3>Cable Subscription</h3>
            <Link href="../cable_tv/decoder_option" className="btn">Pay Now</Link>
          </div>

          <div className="box">
            <Image src="/electricity3.png" alt="" width={0} height={0} layout="responsive" quality={100} />
            <h3>Electric Bill</h3>
            <Link href="/validate_electric" className="btn">Pay Now</Link>
          </div>

          <div className="box">
            <Image src="/network.png" alt="" width={0} height={0} layout="responsive" quality={100} />
            <h3>Airtime / Data</h3>
            <Link href="/validate_airtime.js" className="btn">Buy Now</Link>
          </div>
        </div>
      </section>
    </>
    </Layout>
  )
}

export default Home;