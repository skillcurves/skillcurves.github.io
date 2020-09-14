import React, { Fragment } /*, { useEffect } */ from 'react';

function About() {
    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="aboutUs">
                <div>
                    <img src={require('../images/author.png')} alt="Skill Curves Founder" width="125" height="auto" />
                    <br />
                    <span className="founder">Karthikeya Udupa, Founder</span>
                </div>
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
            {/* <div className="footer">
                www.skillcurves.com
            </div> */}
        </Fragment>
    );
}

export default About;