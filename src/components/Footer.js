import React from 'react'

export default function Footer() {
    return (
        <footer className="row container d-flex justify-content-center">
            <div className="container-fluid pt-5 mb-5 footer pl-4 pr-5">
                <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                        <img className="mb-5" src={require('../assets/movieloungelogo-01.png')} alt="logo" width="130" height="auto" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <h5 className="footer-h5">Company</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Home</a></li>
                            <li><a className="text-muted" href="#">About us</a></li>
                            <li><a className="text-muted" href="#">CoderSchool</a></li>
                            <li><a className="text-muted" href="#">Our partners</a></li>
                            <li><a className="text-muted" href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                        <h5 className="footer-h5">Support</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Shipping</a></li>
                            <li>
                                <a className="text-muted" href="#">International Shipping</a>
                            </li>
                            <li><a className="text-muted" href="#">Return Policy</a></li>
                            <li><a className="text-muted" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                        <h5 className="footer-h5">Useful Links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Cool stuff</a></li>
                            <li><a className="text-muted" href="#">Random feature</a></li>
                            <li><a className="text-muted" href="#">Team feature</a></li>
                            <li><a className="text-muted" href="#">Another one</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 social-af">
                        <div className="row d-flex justify-content-lg-end justify-content-md-around ">
                            <a className="social-btn" href="https://www.facebook.com">
                                <i className="fab fa-facebook-square fa-3x" aria-hidden="true"></i>
                            </a>
                            <a className="social-btn" href="https://www.twitter.com">
                                <i className="fab fa-twitter-square fa-3x ml-md-3" aria-hidden="true"></i>
                            </a>
                            <a className="social-btn" href="https://www.instagram.com">
                                <i className="fab fa-instagram fa-3x ml-md-3" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="row d-flex justify-content-lg-end justify-content-md-around mt-4">
                            <img className="tmdblogo" src={require('../assets/tmdb.png')} alt="tmdb logo"></img>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-11 col-md-5 col-lg-4 text-muted">
                        <p className="container-fluid text-left pl-0">
                            @ 2018-2019 The Movie Lounge Co.
                                </p>
                    </div>
                    <div className="col-1 col-sm-3 col-md-3 col-lg-5"></div>
                    <div className="col-12 col-md-4 col-lg-3 text-muted text-md-right text-sm-center">
                        <ul className="list-unstyled list-inline d-flex flex-nowrap d-flex justify-content-md-end">
                            <li className="list-inline-item mr-lg-5 mr-md-3 mr-sm-2">
                                <a className="text-muted" href="#">Privacy</a>
                            </li>
                            <li className="list-inline-item mr-lg-5 mr-md-3 mr-sm-2">
                                <a className="text-muted" href="#">Terms</a>
                            </li>
                            <li className="list-inline-item mr-lg-1 mr-md-auto">
                                <a className="text-muted" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
