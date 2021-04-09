import { Component } from "react";
import {
    NavLink
} from "react-router-dom";

class Header3 extends Component {
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
                <div class="templatemo-welcome">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                <img src="assets/img/welcome-img.png" class="img-responsive welcome-img" alt="Welcome" />
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                <h2 class="text-uppercase">
                                    <span class="welcome-title-1">Performance</span>
                                    <span class="welcome-title-2">Auto</span>
                                </h2>
                                <p class="welcome-message">Motor is free Bootstrap v3.3.4 responsive web template provided
                by <span class="blue">template</span><span class="green">mo</span>.com website. You can download,
                modify and use this for your website projects.</p>
                                <a href="#" class="welcome-read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header3;