import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import Shap from '../img/text-shape.png'
import About from '../img/about-thumb.png'
import About1 from '../img/about-shape-1.png'
import About2 from '../img/about-shape-2.png'
import Future from '../img/about-icon-1.png'
import Future2 from '../img/about-icon-2.png'
import Award from '../img/about-award.png'
import Section from '../img/section-shape.png'
import Btn from '../img/button-shape.png'
import Service from '../img/service-icon1.png'
import Service1 from '../img/service-1.jpg'
import Service2 from '../img/service-icon2.png'
import Service3 from '../img/service-2.jpg'
import Service4 from '../img/service-icon3.png'
import Service5 from '../img/service-3.jpg'




function Navbar() {
    return (
        <>
            <header>
                <div >
                    <div className="p-3 text-center d-flex border-bottom ">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-md-3 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                    <div className="addreses"> &nbsp;
                                        <i className="fas fa-map-marker-alt"></i>
                                        <Link to="/">New market Sandigo -
                                            California</Link>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                    <div className="addreses">&nbsp;
                                        <i className="far fa-envelope-open pe-2"></i>
                                        <Link to="/">example@gmail.com</Link>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                                    <div className="d-flex">
                                        <div className="phoneno">&nbsp;
                                            <i className="fas fa-phone"></i>
                                            <Link to="/" className="mobileno pe-5 ps-2">+123
                                                (4567) 890</Link>
                                        </div>
                                        <div className="dropdown">

                                            <Link className="text-reset me-3" to="/">
                                                <span>
                                                    <i className="fab fa-facebook-f"></i>
                                                </span>
                                            </Link>
                                            <Link className="text-reset me-3" to="/">
                                                <span>
                                                    <i className="fab fa-twitter"></i>
                                                </span>
                                            </Link>
                                            <Link className="text-reset me-3" to="/">
                                                <span>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </span>
                                            </Link>
                                            <Link className="text-reset me-3" to="/">
                                                <span>
                                                    <i className="fab fa-pinterest-p"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <hr />
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container justify-content-center justify-content-md-between">
                        <div className="col-md-2 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <ul className="navbar-nav flex-row align-items-center">
                            <li className="nav-item me-2 me-lg-0">
                                <Link
                                    className="nav-link btn shadow-0 p-0 me-3"
                                    role="button"
                                    data-mdb-toggle="sidenav"
                                    data-mdb-target="#sidenav-1"
                                    data-mdb-ripple-init
                                    aria-controls="#sidenav-1"
                                    aria-haspopup="true">
                                    <span>
                                        Home <span><i className="fa-solid fa-chevron-down"></i></span>
                                    </span>
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="#home1">Home1</Link></li>
                                    <li><Link to="#home2">Home2</Link></li>
                                    <li><Link to="#home3">Home3</Link></li>
                                    <li><Link to="#home4">Home4</Link></li>
                                    <li><Link to="#home5">Home5</Link></li>
                                    <li><Link to="#home6">Home6</Link></li>
                                    <li><Link to="#home7">Home7</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                                <Link className="nav-link" to="#">
                                    Service <span><i className="fa-solid fa-chevron-down"></i></span>
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="#home1">SERVICE</Link></li>
                                    <li><Link to="#home2">SERVICE DETAILS</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                                <Link className="nav-link" to="#">
                                    Pages <span><i className="fa-solid fa-chevron-down"></i></span>
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="#home1">ABOUT</Link></li>
                                    <li><Link to="#home2">SERVICE</Link></li>
                                    <li><Link to="#home3">SERVICE DETAILS</Link></li>
                                    <li><Link to="#home4">PROJECT</Link></li>
                                    <li><Link to="#home5">PROJECT DETAILS</Link></li>
                                    <li><Link to="#home6">DONATION</Link></li>
                                    <li><Link to="#home7">DONATION DETAILS</Link></li>
                                    <li><Link to="#home7">TEAM</Link></li>
                                    <li><Link to="#home7">FAQUS</Link></li>
                                    <li><Link to="#home7">TESTIMONIAL</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                                <Link className="nav-link" to="#">
                                    Blog <span><i className="fa-solid fa-chevron-down"></i></span>
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="#home1">BLOG GRID</Link></li>
                                    <li><Link to="#home2">BLOG LIST</Link></li>
                                    <li><Link to="#home3">BLOG 2COLUMN</Link></li>
                                    <li><Link to="#home4">BLOG DETAILS</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                        </ul>
                        <div className="third-menu d-flex align-items-center">
                            <div className="search-icon">
                                <Link to="#">
                                    <i className="fas fa-search"></i>
                                </Link>
                            </div>
                            <Link to="#" className="quote-btn">Get A Quote</Link>
                        </div>
                    </div>
                </nav>
                <div id="sidenav-1" className="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
                    <section className="hero-section">
                        <div className="container">
                            <div className="content">
                                <h4 className="sub-heading">NATURAL ENVIRONMENT</h4>
                                <h1 className="main-heading">Be Safe Controls Environment</h1>
                                <p className="description">
                                    Professionally optimize interdependent intellectual interoperable
                                    connect best practices. Progressively fabricate done.
                                </p>
                                <div className="buttons">
                                    <Link to="/" className="btn btn-primary-1">Let's Talk &nbsp;
                                        <span>
                                            <img src={Btn} alt="images" />
                                        </span>
                                    </Link>


                                    <Link to="/" className="btn btn-secondary">Read More</Link>
                                </div>
                            </div>

                        </div>
                        <div className="social-links">
                            <Link to="/"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="/"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to="/" className="follow">Follow Us</Link>
                        </div>
                    </section>
                </div>
            </header>



            <section className="echofy-text-section" data-cues="zoomIn">
                <div className="inner-container">
                    <div className="marquee">
                        <div className="marquee-block">
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Environmental
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Ocean-Recycling
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Environmental
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Renewable-Energy
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Ocean-Recycling
                                    </span>
                                </h6>
                            </div>
                        </div>
                        <div className="marquee-block">
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Environmental
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Ocean-Recycling
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Environmental
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Renewable-Energy
                                    </span>
                                </h6>
                            </div>
                            <div className="content-box">
                                <h6 className="title">
                                    <span>
                                        <img src={Shap} alt="imgs" width="40px" />Ocean-Recycling
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cover pb-5">
                <div className="container">
                    <div className="future">
                        <div className="car-image " >
                            <img src={About} alt="images" />
                            <div className="award-img">
                                <img src={Award} alt="images" />
                            </div>
                        </div>
                        <div className="about-text">
                            <div className="inner-text1">
                                <img src={Section} alt="images" />
                                <span className="text-01">About Echofy</span>
                                <div className="inner-01">
                                    <img src={About1} alt="images" />
                                </div>
                            </div>
                            <h1 className="future-text">Environmental Sustainable
                                Forever Green Future</h1>
                            <div className="inner-text d-flex">
                                <img src={Future} alt="images" width="40" height="40" />
                                <div className="box mx-3">
                                    <div className="text mb-2"> <b> Economic Benifits</b></div>
                                    <div className="text">Alternative innovation after ethical to network environmental whiteboard
                                        transparent growth
                                        natural done</div>
                                </div>
                            </div>
                            <div className="inner-text d-flex">
                                <img src={Future2} alt="images" width="40" height="40" />
                                <div className="box mx-3">
                                    <div className="text mb-2"><b>Safe Environment</b></div>
                                    <div className="text">Alternative innovation after ethical to network environmental whiteboard
                                        transparent growth
                                        natural done</div>
                                </div>
                            </div>
                            <hr />
                            <div className="moreabout-btn d-flex">
                                <button className="btn btn-outline ms-4" type="button">
                                    More about
                                    <span>
                                        <img src={Btn} alt="images" />
                                    </span>
                                </button>
                                <div className="about-shape-2">
                                    <img src={About2} alt="imgs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="cover-1 pb-5">
                <div className="container">
                    <div className="our-services-outer">
                        <span className="text-01">
                            <img src={Section} alt="" />Our Services</span>

                        <div className="our-services-outer-header">
                            <h2>Echofy Provide Environment
                                Best Leading Services</h2>
                        </div>
                        <div className="our-service-outer-slider border-bottom=20px">
                            <div className="owl-carousel owl-theme d-flex">
                                <div className="item ">
                                    <div className="card width: 25rem; height: 450px;">
                                        <div className="card-img background-color:#f7f6ee;">
                                            <img src={Service} className="card-img-top  float-start w-25" alt="images" />
                                        </div>
                                        <div className="card-body card-item card-content text-start background-color: #f7f6ee;">
                                            <h5 className="card-title">Cleaning Ocean</h5>
                                            <p className="card-text">Alternative innovation to ethical network environmental
                                                whiteboard transparenes natural to environment</p>
                                            <div className="service">
                                                <img src={Service1} alt="images" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card width: 25rem; height: 450px; background-color: #f7f6ee;">
                                        <div className="card-img  background-color:#f7f6ee;">
                                            <img src={Service2} className="card-img-top  float-start  w-25"
                                                alt="images" />
                                        </div>
                                        <div className="card-body text-start background-color: #f7f6ee;">
                                            <h5 className="card-title">Safe Environment</h5>
                                            <p className="card-text">Alternative innovation to ethical network environmental
                                                whiteboard transparenes natural to environment</p>
                                            <div className="service">
                                                <img className="service" src={Service3} alt="images" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item ">
                                    <div className="card width: 25rem; height: 450px; background-color: #f7f6ee;">
                                        <div className="card-img  background-color: #f7f6ee;">
                                            <img src={Service4} className="card-img-top float-start  w-25"
                                                alt="images" />
                                        </div>
                                        <div className="card-body text-start background-color:#f7f6ee;">
                                            <h5 className="card-title">Dirty Recycling</h5>
                                            <p className="card-text">Alternative innovation to ethical network environmental
                                                whiteboard transparenes natural to environment</p>
                                            <div className="service">
                                                <img className="service" src={Service5} alt="images" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}
export default Navbar;






