import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import BrandCreationPage from './pages/BrandCreationPage';
import ProjectDetails from './pages/ProjectDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import config from 'react-global-configuration';

// config.set({
//     base_url:"http://localhost:3000/"
// });

function App() {
    return (
        <section>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/service" component={ServicesPage} />
                    <Route exact path="/projects" component={ProjectPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/project_details" component={ProjectDetails} />
                    <Route exact path="/service/brand_creation" component={BrandCreationPage} />
                    
                </Switch>
            </BrowserRouter>
        </section>
    );
}

export default App;
