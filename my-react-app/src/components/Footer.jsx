import React from 'react'

function Footer() {
  console.log("Footer componet rendered")
  return (
    <footer>
      <hr />
      <div>&copy; {new Date().getFullYear()} Footer</div>
      <hr />
      
    </footer>

  )
}

export  {Footer}
