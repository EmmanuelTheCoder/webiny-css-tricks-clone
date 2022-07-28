import React from 'react'

export default function Footer() {
  return (
    <div className='footer-container'>
        <p className='poweredby'>CSS-Tricks is powered by <span>DigitalOcean</span>.</p>
        <div className="footer-elements-container">
            <div className="container1 move">
                <h5>DIGITALOCEAN</h5>
                <p>DigitalOcean</p>
                <p>DigitalOcean Community</p>
                <p>About DigitalOcean</p>
                <p>Legal</p>
                <p>Free Credit Offer</p>
            </div>
            <div className="container2 move">
                <h5>CSS-TRICKS</h5>
                <p>Email</p>
                <p>Guest Writing</p>
                <p>Book</p>
                <p>Advertising</p>
            </div>
            <div className="container3 move">
                <h5>FOLLOW</h5>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Youtube</p>

            </div>
            <div className="container4 move">
                <p></p>
                <p>CodePen</p>
                <p>iTunes</p>
                <p>RSS</p>
            </div>

        </div>
    </div>
  )
}
