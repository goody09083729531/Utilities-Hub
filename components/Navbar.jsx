import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
  const router = useRouter();
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === '../pages/index') {
      const handleScroll = () => {
        navbarRef.current.classList.remove('active');
        setMenuOpen(false); // Add this line to close the menu on scroll
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };
  }, [router.pathname]);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Link href="#" className="logo"><span>Utilities</span> Hub</Link>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`} ref={navbarRef}>
        <Link href="#home" className="active">Home</Link>
        <Link href="#utilities">Utilities</Link>
        <Link href="#">About</Link>
        <Link href="#">FAQ&#x27;s</Link>
        <Link href="#">Contact</Link>
      </nav>

      <div className="icons">
        {menuOpen ? (
          <RiCloseFill className="menu-icon" onClick={handleClick} />
        ) : (
          <RiMenu2Fill className="menu-icon" onClick={handleClick} />
        )}
      </div>
    </>
  )
}

export default Navbar;