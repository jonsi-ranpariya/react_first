import React from 'react'

const Header = () => {
  return (
        <nav>
        <img src='./logo.webp' alt='logo'/>

        <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Blog</a></li>
            <li><span><a href="#">Get a demo</a></span></li>
            <li className="fa fa-user">&nbsp;&nbsp;<a href="#">Login</a></li>
        </ul>
        </nav>
  )
}

export default Header