import React, { Fragment } /*, { useEffect } */ from 'react';
// import { Link } from 'react-router-dom';
import './Error.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function Error() {
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
                    <title>Skill Curves | Page not found</title>
                    <meta name="description" content="Skill Curves 404 Error Page"></meta>
                    <meta name="robots" content="Skillcurves, Skill Curves, Karthikeya Updupa, Blog, Quotes, Stocks, Finance, Money"></meta>
                </Helmet>
            </HelmetProvider>
            <div className="error" history={history}>
                <a href="/">
                    <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
                </a>
                <div className="mainbox">
                    <div className="err">4</div>
                    <i className="far fa-question-circle fa-spin">0</i>
                    <div className="err2">4</div>
                    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
                </div>
            </div>
            {/* <div className="footer">
                <Link to="/termsandconditions">Terms and Conditions</Link>
                <span> | </span>
                <Link to="/privacypolicy">Privact Policy</Link>
                <span> | Copyright © 2020 skillcurves.com</span>
            </div> */}
        </Fragment>
    );
}

export default Error;