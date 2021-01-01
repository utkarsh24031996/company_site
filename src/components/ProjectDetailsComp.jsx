import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ProjectDetailsComp() {
    return (
        <div className="project-single area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="project-inner project-carousel-2">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                margin={10}
                                autoplay={true}
                                lazyContent={true}
                                autoplayTimeout={2000}
                                nav
                            >
                                <div className="project-image">
                                    <img src="assets/img/project/p1.jpg" alt="" />
                                </div>
                                <div className="project-image">
                                    <img src="assets/img/project/p2.jpg" alt="" />
                                </div>
                                <div className="project-image">
                                    <img src="assets/img/project/p3.jpg" alt="" />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="project-history">
                            <div className="project-name">
                                <ul>
                                    <li><span>Project</span>: randerc</li>
                                    <li><span>Categories</span> : Business</li>
                                    <li><span>Status</span> : Good</li>
                                    <li><span>Client</span> : Rechrd</li>
                                </ul>
                            </div>
                        </div>
                        <div className="new-project">
                            <div className="project-new">
                                <h4>Are you Ready new project?</h4>
                                <a className="hire-btn" href="#">Contact us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="project-details">
                            <h3>It Management system analysis</h3>
                            <p>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <h4>Successful Complete project </h4>
                            <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines.The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <ul className="marker-list">
                                <li>Words is roughly being maintained</li>
                                <li>Letters or begins with a capital letter</li>
                                <li>Previous casing is maintained</li>
                                <li>Maintains the amount of lines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsComp
