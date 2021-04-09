import { Component } from "react";
import {
    NavLink
} from "react-router-dom";

class Header1 extends Component {
    render() {
        return (
            <div class="templatemo-top-section">
                <div class="templatemo-header">
                    <img class="templatemo-header-img" src="assets/img/header.png" alt="Header" />
                    <h1 class="templatemo-site-name">Motor</h1>
                    <div class="mobile-menu-icon">
                        <i class="fa fa-bars"></i>
                    </div>
                    <div class="templatemo-nav-container">
                        <nav class="templatemo-nav">
                            <ul>
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products">Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/gallery">Gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="templatemo-welcome welcome-slider">
                    <div class="container">
                        <div class="row">
                            <div class="flexslider">
                                <ul class="slides">
                                    <li>
                                        <div class="about-slider">
                                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                <img src="assets/img/about/1.jpg" class="img-responsive" alt="Image" />
                                            </div>
                                            <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12 about-slider-description">
                                                <h2 class="text-uppercase welcome-title">
                                                    <span class="welcome-title-1">Performance</span>
                                                    <span class="welcome-title-2">for the speed</span>
                                                </h2>
                                                <p class="welcome-message">Motor is free Bootstrap v3.3.4 responsive web template provided
                by <span class="blue">template</span><span class="green">mo</span>.com website. You can download,
                modify and use this for your website projects. Please tell your friends about our templates.
                Thank you for visiting. Have fun!</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-slider">
                                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                <img src="assets/img/about/1.jpg" class="img-responsive" alt="Image" />
                                            </div>
                                            <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12 about-slider-description">
                                                <h2 class="text-uppercase welcome-title">
                                                    <span class="welcome-title-1">Find to own</span>
                                                    <span class="welcome-title-2">the fast &amp; best</span>
                                                </h2>
                                                <p class="welcome-message">Lorem ipsum dolor sit amet, consectetuer adipiscing elit dori. Aenean commodo ligula eget. Aenean massa. Cumdent sociis natoque penatibus et magnis dis parturient montes, sor ind nascetur ridiculus mus. Lorem ipsum dolor sit amet dipiscing elit dori.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header1;