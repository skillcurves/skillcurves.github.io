import React, { Fragment, useState, useEffect } from 'react';
import { Redirect /*, Link*/ } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function Quote({ match, location }) {
    let history = createBrowserHistory();
    ReactGA.initialize('UA-180316702-1');
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    const options = { /*weekday: 'short',*/ year: 'numeric', month: 'short', day: 'numeric' };

    const [quotes, setQuotes] = useState(null);

    const getQuote = (signal) => {
        //http://localhost:5000
        fetch(`https://skillcurves.herokuapp.com/blogquotes?quoteName=${location.pathname.replace("/quote/", "")}`, { signal: signal })
            .then(response => response.json())
            .then(data => setQuotes(data))
            .catch(error => console.log(error));
        // console.log("called");
    }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        getQuote(signal);
        // console.log("signal", signal);
        return function cleanup() {
            abortController.abort();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Skill Curves | {quotes !== null ? quotes.quotes.length > 0 ? quotes.quotes[0].title : "Skill Curves Blog Article" : "Skill Curves Blog Article"} </title>
                    <meta name="description" content={quotes !== null ? quotes.quotes.length > 0 ? quotes.quotes[0].description : "Skill Curves is a passion project which aims to make best of the opportunities in financial market to advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills." : "Skill Curves is a passion project which aims to make best of the opportunities in financial market to advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills."}></meta>
                    <meta name="robots" content={quotes !== null ? quotes.quotes.length > 0 ? quotes.quotes[0].metadataKeywords : "Skill Curves, Skillcurves, Karthekeya Udupa, Blog, Article" : "Skill Curves, Skillcurves, Karthekeya Udupa, Blog, Article, Quote"}></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="blog animate-bottom" history={history}>
                {
                    quotes ?
                        quotes.quotes.length > 0 ?
                            quotes.quotes.map(quote =>
                                <div key={quote.title}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            `<h1>${quote.title}</h1>`
                                            + `<div style="flex-direction: column">
                                <span>${new Date(quote.createdAt).toLocaleDateString(undefined, options)}</span>
                                </div>
                                </div>`
                                            + `<p>${quote.quote}</p>`
                                    }}
                                />
                            )
                            :
                            <Redirect to="/error" />
                        :
                        <div className="loader"></div>
                }
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

export default Quote;