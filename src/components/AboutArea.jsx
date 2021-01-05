import React from 'react'

const AboutArea = () => {
    return (
        <div className="about-area about-2 fix">
            <div className="container-full">
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-xs-12">
                        <div className="about-image">
                             <div className="video-content ">
                                <a href="..\assets\img\about\Square Video Post.gif" target="_blank" className="video-play vid-zone">
                                    <i className="fa fa-play" />
                                </a>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="support-all about-content">
                            <div className="section-headline right-headline white-headline">
                                <h3>Technology <span className="color">with experts</span> that provides reliability</h3>
                                <p>Rely on our expert team for your technological requirement.We would help you accomplish your requirements with a team of experts in various technologies.Our team can do systems design, architecture, applications implementation, systems integration,technology planning and project management services. </p>
                            </div>
                            <div className="about-company">
                                <div className="single-about">
                                    <span className="about-text">Professional team</span>
                                    <span className="about-text">Innovative ideas</span>
                                    <span className="about-text">Technical support</span>
                                </div>
                                <div className="single-about">
                                    <span className="about-text">Goal achivement</span>
                                    <span className="about-text">Worldwide services</span>
                                    <span className="about-text">Marketing expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea
