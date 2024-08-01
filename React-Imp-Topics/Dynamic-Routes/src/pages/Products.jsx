import React from 'react'
import {Outlet ,  Link } from 'react-router-dom'

function products() {
  return (
    <div>
      <Link to = "123" style={{marginRight:'10px'}} >P1</Link>
      <Link to = "456" style={{marginRight:'10px'}} >P2</Link>
      <Link to = "789" style={{marginRight:'10px'}} >P3</Link>


      <Outlet/>
    </div>
  )
}

export default products