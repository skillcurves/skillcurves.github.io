import React, { Fragment } /*, { useEffect } */ from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="terms">
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