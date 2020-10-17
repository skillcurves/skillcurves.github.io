import React, { Fragment } /*, { useEffect } */ from 'react';
// import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function About() {
    let history = createBrowserHistory();
    ReactGA.initialize('UA-180316702-1');
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Skill Curves | About Us </title>
                    <meta name="description" content="Skill Curves is a passion project which aims to make best of the opportunities in financial market to 
advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills. Know more about Skill Curves and Karthekeya Udupa"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, About Us, Blog, Finance, Stock Market"></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="aboutUs" history={history}>
                <div>
                    <img src="authors/author.png" alt="Skill Curves Founder" width="125" height="auto" />
                    <br />
                    <span className="founder">Karthikeya Udupa, Founder</span>
                </div>
                <hr />
                <p>
                    Karthikeya Udupa is the founder of Skill Curves. He brings 15+ years of experience from reputed
                    organisations like Angel Broking and Sumedha Fiscal Services Ltd. His corporate life presented scale
                    and diversity of opportunities in the field of Research, Advisory, Training, Learning and Development.
                    His involvement across the disciplines gives complimentary strength to approach stock market
                    empirically.
                </p>
                <p>
                    Karthikeya is a management graduate and NISM XV certified market professional. Before devoting his
                    work fulltime to Skill Curves, he has trained over 2000+ young minds and 100+ sub-brokers on
                    financial markets and been a SME (Subject Matter Expert) speaker on various platforms. He serves as
                    a consultant, coach, trainer, writer all in the name of creating a knowledgeable and skilled society. He
                    enjoys expressing himself creatively through Training, Writing &amp; Tweeting.
                </p>
                <p>
                    He is a profound believer of Ubuntu principle which says “How can I be happy when you are
                    unhappy? I am because we are”.
                </p>
            </div>
            <div className="our-standards">
                <img src={require('../images/SkillCurvesStandards-v3.png')} alt="SkillCurves Standards"/>
            </div>
            {/* <div className="footer">
                <Link to="/termsandconditions">Terms and Conditions</Link>
                <span> | </span>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <span> | Copyright © 2020 skillcurves.com</span>
            </div> */}
        </Fragment>
    );
}

export default About;