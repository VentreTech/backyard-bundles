import React, { Component } from 'react';
import Link from 'gatsby-link'
import NavBar from '../components/navBar'

import { withPrefix } from "gatsby-link";

const Header = ({ location }) => {
    return (
        <div>
            <NavBar />
            
                <section className="hero is-fullheight  hero-image">

                    <div className="container">
                        <div className="columns">
                            <div className="hero-body">


                                <div className="column is-one-half">

                                    <div className="content">
                                        <p className="title has-text-dark">title</p>
                                    </div>
                                    <div className="content">

                                        <p className="title has-text-primary">Another title</p>
                                        <ul>
                                            <li className="has-text-primary"> Item 1</li>
                                            <li className="has-text-primary"> Item 1</li>
                                            <li className="has-text-primary"> Item 1</li>
                                            <li className="has-text-primary"> Item 1</li>
                                            <li className="has-text-primary"> Item 1</li>
                                        </ul>


                                    </div>

                                    <div className="content">
                                        <div className="button is-large is-primary is-fullwidth">
                                            <span className="icon"><i className="fas fa-download"></i></span>
                                            <span>Free Download</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="column">

                                </div>

                            </div>
                        </div>
                    </div>


                </section>
            }
        </div>
    )
}

export default Header