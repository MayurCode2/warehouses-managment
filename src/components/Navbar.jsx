import React from 'react'
import './css/navbar.css'


function Navbar() {
  return (
    <nav class="navbar">
  <div class="container">
    <div class="logo">
      <h1><a href="#">Warehouse</a></h1>
    </div>

    <ul class="menu">
      <li><a href="/">Home</a></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar