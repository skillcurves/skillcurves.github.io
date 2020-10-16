import React, { Fragment } /*, { useEffect } */ from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function PrivacyPolicy() {
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
                    <title>Skill Curves | Privacy Policy</title>
                    <meta name="description" content="Skill Curves is a passion project which aims to make best of the opportunities in financial market to 
advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills. Read Skill Curves Privacy Policy"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Blog, Quotes, Stocks, Finance, Money"></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="terms" history={history}>
                <h2>Privacy Policy</h2>
                <p>We, at skillcurves.com, maintain strict confidentiality of personal data and to use the information only in the
                manner which would be beneficial to our customers. We shall use the personal information to improve our
                service to you and to keep you updated about our new service, newsletters, articles that may be of interest to
                you. For your equity investments we may share your details with any SEBI registered brokers or authorised
                person. By using the service, you accord your consent to the gathering and utilization of data for Skill Curves
                for this strategy.
                </p>
                <p>Copyright © 2020 skillcurves.com</p>
            </div>
            <div className="footer">
                <Link to="/termsandconditions">Terms and Conditions</Link>
                <span> | </span>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <span> | Copyright © 2020 skillcurves.com</span>
            </div>
        </Fragment>
    );
}

export default PrivacyPolicy;