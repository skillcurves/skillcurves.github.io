import React, { Fragment } /*, { useEffect } */ from 'react';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function TermsAndConditions() {
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
                    <title>Skill Curves | Terms and Conditions</title>
                    <meta name="description" content="Skill Curves is a passion project which aims to make best of the opportunities in financial market to 
advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills. Read Skill Curves Terms and Conditions"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Blog, Quotes, Stocks, Finance, Money"></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="terms" history={history}>
                <h2>Terms of service</h2>
                <p>This page contains important information regarding the terms and conditions which apply when you access
                our website. Please note that the information contained herein is subject to change without notice.
                The contents, materials appearing on this site, blog may have intentional errors. ‘Skill Curves’ does not warrant
                that any of the materials on its website are accurate, complete or current. Skill Curves may make changes to
                the materials contained on its website at any time without notice. However, it does not make any commitment
                to update the materials.
                </p>
                <p>
                    DISCLAIMER: No content on this website or blog should be construed to be an investment advice. All
                    information on this website is for educational and informational purpose only. Skill Curves accepts no liability
                    for any interpretation of articles or comments on this blog being used for actual investments. We are not SEBI
                    registered financial advisors. We do not provide any investment or financial advisory services. You will be
                    solely responsible for your own money and decisions. Please consult a SEBI registered financial advisor for all
                    your financial matters.
                </p>
                <p>
                    Copyright © 2020 skillcurves.com
                </p>
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

export default TermsAndConditions;