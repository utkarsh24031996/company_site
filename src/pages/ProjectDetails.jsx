import React, { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import Breadcumb from '../components/Breadcumb';
import Footer from '../components/Footer';
import ProjectDetailsComp from '../components/ProjectDetailsComp';

function ProjectDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <React.Fragment>
            <OtherPageHeader />
            <Breadcumb pageTitle={"Project details"} />
            <ProjectDetailsComp />
            <Footer />
        </React.Fragment>
    )
}

export default ProjectDetails