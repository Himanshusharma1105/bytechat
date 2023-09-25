import React from 'react'


const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ByteChat</span>
      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/7525670?v=4" alt="user" />
        <span className="username">John Doe</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar