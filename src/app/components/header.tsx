import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    
        <nav >
            <nav className="Swift">
                 <h1 >Swift Sales</h1>
            </nav>
        

        <nav className="Link">

        <Link className="Link" href="/" target="">Home</Link> 
        <Link className="Link" href="about" target="_blank">About</Link>

      </nav>



      </nav>

    
  )
}

export default Header
