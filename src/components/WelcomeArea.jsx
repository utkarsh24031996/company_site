import React from 'react'

function WelcomeArea() {
    return (
        <div className="welcome-area area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="all-wel-services">
                            <div className="well-services wow fadeInUp" data-wow-delay="0.3s">
                                <div className="services-img">
                                    <a className="big-icon" href="#"><i className="flaticon-052-project-plan" /></a>
                                </div>
                                <div className="main-wel">
                                    <div className="wel-content">
                                        <h4>Innovative solutions</h4>
                                        <p>We provide innovative solutions to enhance your brand goodwill in market.</p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="well-services wow fadeInUp" data-wow-delay="0.7s">
                                <div className="services-img">
                                    <a className="big-icon" href="#"><i className="flaticon-002-analysis" /></a>
                                </div>
                                <div className="main-wel">
                                    <div className="wel-content">
                                        <h4>Market research</h4>
                                        <p>We use unique market research tactics to beat the market competition.</p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="well-services wow fadeInUp" data-wow-delay="0.5s">
                                <div className="services-img">
                                    <a className="big-icon" href="#"><i className="flaticon-060-team-work" /></a>
                                </div>
                                <div className="main-wel">
                                    <div className="wel-content">
                                        <h4>Experienced team</h4>
                                        <p>Our highly experienced team would help you grow your business.</p>
                                        <a href="#">Read more</a>
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

export default WelcomeArea
