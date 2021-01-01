import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomePageSlider = props => {
    return (


<div className="intro-area intro-area-3">
<div className="intro-carousel">
<OwlCarousel
    className="owl-theme"
    loop
    items={1}
    dots={false}
    autoplay={true}
>
    <div className="item">
    <div className="intro-content-2">
                    <div className="slider-images">
                        <img src="assets/img/slider/h3.jpg" alt="" />
                    </div>
                    <div className="slider-content">
                        <div className="display-table">
                            <div className="display-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                                                <h2 className="title2">Building the Future with Infuse Technology Solutions.</h2>
                                            </div>
                                            <div className="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                                                <p>We develop effective plans to grow your business.</p>
                                            </div>
                                            <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                                                <a href="#" className="ready-btn left-btn ">Our Services</a>
                                                <a href="#" className="ready-btn right-btn">Contact us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>



                <div className="item">
                <div className="intro-content-2 slide-2">
                    <div className="slider-images">
                        <img src="assets/img/slider/h4.jpg" alt="" />
                    </div>
                    <div className="slider-content">
                        <div className="display-table">
                            <div className="display-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                                                <h2 className="title2">Connecting Business Need with Infuse technology Solutions.</h2>
                                            </div>
                                            <div className="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                                                <p>We help you with generating leads.</p>
                                            </div>
                                            <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                                                <a href="#" className="ready-btn left-btn ">Our Services</a>
                                                <a href="#" className="ready-btn right-btn">Contact us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </OwlCarousel>
                
                
    </div>
    </div>




    )
}

export default HomePageSlider

