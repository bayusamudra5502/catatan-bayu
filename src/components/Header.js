import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

export default function Header() {
  return (
    <div>
      <header className="global-header">
        <Link to="/">
          <StaticImage src="../images/favicon.png" alt="logo" className="logo" />
          Catatan Bayu
        </Link>
      </header>
    </div>
  )
}
