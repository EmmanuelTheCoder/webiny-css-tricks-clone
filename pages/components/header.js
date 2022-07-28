import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='container-header'>

      <Link href="/">
          <div className='header'>
              <p>*</p>
              <h1>CSS-TRICKS |</h1>
              <p className='digitalocean'>DigitalOcean</p>    

          </div>
      </Link>
          <div className='nav-bar'>
            <p>Articles</p>
            <p>Videos</p>
            <p>Almanac</p>
            <p>Newsletter</p>
            <p>Guides</p>
            <p>DigitalOcean</p>
            <p>Docommunity</p>
            <p></p>
          </div>
    </div>
  )
}

export default Header