import React from 'react'

export default function Header() {
  return (
    <div>
        <nev className="container">
            <div>
                <img src="/logo.png" alt="logo" height={50} />
            </div>
            <ul>
                <a>Menu</a>
                <a>Location</a>
                <a>About</a>
                <a>Contect</a>
            </ul>
            <button className='login-btn'>Login</button>
        </nev>
    </div>
  )
}
