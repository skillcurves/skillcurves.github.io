import React, { Fragment } /*, { useEffect } */ from 'react';

function TermsAndConditions() {
    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="terms">
                <h2>Terms of service</h2>
This page contains important information regarding the terms and conditions which apply when you access
our website. Please note that the information contained herein is subject to change without notice.
The contents, materials appearing on this site, blog may have intentional errors. ‘Skill Curves’ does not warrant
that any of the materials on its website are accurate, complete or current. Skill Curves may make changes to
the materials contained on its website at any time without notice. However, it does not make any commitment
to update the materials.
DISCLAIMER: No content on this website or blog should be construed to be an investment advice. All
information on this website is for educational and informational purpose only. Skill Curves accepts no liability
for any interpretation of articles or comments on this blog being used for actual investments. We are not SEBI
registered financial advisors. We do not provide any investment or financial advisory services. You will be
solely responsible for your own money and decisions. Please consult a SEBI registered financial advisor for all
your financial matters.

<h2>Privacy Policy</h2>
We, at skillcurves.com, maintain strict confidentiality of personal data and to use the information only in the
manner which would be beneficial to our customers. We shall use the personal information to improve our
service to you and to keep you updated about our new service, newsletters, articles that may be of interest to
you. For your equity investments we may share your details with any SEBI registered brokers or authorised
person. By using the service, you accord your consent to the gathering and utilization of data for Skill Curves
for this strategy.
Copyright © 2020 skillcurves.com
            </div>
        </Fragment>
    );
}

export default TermsAndConditions;