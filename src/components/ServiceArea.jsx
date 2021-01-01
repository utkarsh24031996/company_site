import React from 'react';
import { Link } from 'react-router-dom';


const ServiceArea = () => {
    return (
        <div className="service-area service-area-2 bg-color area-padding-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h3>Professional services</h3>
                            <p>We help businesses to define their objectives and create the perfect road map</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="all-services">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-service wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-icon">
                                    <span className="flaticon-052-project-plan" />
                                </div>
                                <div className="service-inner">
                                    <div className="service-content">
                                        <h4>Brand Creation</h4>
                                        <p>Brand Creation is the process of creating and strengthening your professional services so you get grip over market.</p>
                                        <Link className="service-btn" to={'/service/brand_creation'}><i className="ti-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-service wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-icon">
                                    <span className="flaticon-031-financial" />
                                </div>
                                <div className="service-inner">
                                    <div className="service-content">
                                        <h4>Market Research</h4>
                                        <p>Market research is to look at the market associated with a particular good or service to ascertain how the audience would expect.</p>
                                        <a className="service-btn" href="#"><i className="ti-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-service wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-icon">
                                    <span className="flaticon-057-statistics" />
                                </div>
                                <div className="service-inner">
                                    <div className="service-content">
                                        <h4>Digital Marketing</h4>
                                        <p>Digital marketing, you can reach an enormous audience in a way that is cost-effective.You can reach more customers for less money.</p>
                                        <a className="service-btn" href="#"><i className="ti-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-service wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-icon">
                                    <span className="flaticon-012-business" />
                                </div>
                                <div className="service-inner">
                                    <div className="service-content">
                                        <h4>Ecommerce</h4>
                                        <p>Ecommerce is the practice of using promotional tactics to drive traffic to your online store, converting that traffic into paying customers.</p>
                                        <a className="service-btn" href="#"><i className="ti-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-service wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-icon">
                                    <span className="flaticon-041-network" />
                                </div>
                                <div className="service-inner">
                                    <div className="service-content">
                                        <h4>Enterprise Application</h4>
                                        <p>Enterprise Application is used to improve internal corporate processes and workflows.Many processes can be made automated and cost-effective.</p>
                                        <a className="service-btn" href="#"><i className="ti-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="single-service wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-icon">
                                    <span className="flaticon-002-analysis" />
                                </div>
                                <div className="service-inner">
                                    <div className="service-content">
                                        <h4>App Development</h4>
                                        <p>App Development is the way to reach billions of people. There is increased penetration of smart phones in the market which means there is a vast scope for mobile apps.</p>
                                        <a className="service-btn" href="#"><i className="ti-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceArea;