import React from 'react'

function Header() {
  console.log("Header componet rendered")
  return (
    <header>
      <h1>
      My website
      </h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      {/* <img src="https://imgs.search.brave.com/ubICz6DPDJiDSH44K0575uE8D-z6pAk8CITVu9RtZrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYz/NjgyMDEwL3Bob3Rv/L3RoZS1saW9uLWtp/bmcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU5qOHVlVHBW/T0ZKMExlQW1uSXYt/WENON2VpbUVBdDRs/ZGNUa3lFRXJJRWs9" alt="LionImg" /> */}
     
      <hr />
      
    </header>

  )
}

export  {Header}
