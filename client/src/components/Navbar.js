import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-light-blue pa3">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Link className="f4 link dim ph3 pv2 mb2 dib white bg-navy br-pill mr2" to="/get">Products</Link>
          <Link className="f4 link dim ph3 pv2 mb2 dib white bg-navy br-pill" to="/create">SubmitProducts</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar