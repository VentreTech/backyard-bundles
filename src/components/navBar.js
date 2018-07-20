import React from 'react'
import Link from 'gatsby-link'

const NavBar = ({ siteTitle }) => (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-warning">
            <Link className="navbar-item" to="/">
                { siteTitle }
            </Link>

            {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true">
                        Expo
                    </span>
                    <span aria-hidden="true">
                        Love
                        
                    </span>
                        <span aria-hidden="true"></span>
                </a> */}
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <Link className="navbar-item" to="/">
                                Link
                            </Link>
                        </p>
                        <Link className="navbar-item " to="/">
                            Link
                        </Link>
                        <Link className="navbar-item " to="/">
                            Link
                        </Link>
                        <Link className="navbar-item " to="/">
                            Link
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar