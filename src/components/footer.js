import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
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
            </div>
        </div>
    </section>
)

export default Footer