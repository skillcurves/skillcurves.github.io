import React, { Fragment, useState, useEffect } from 'react';
import { Redirect /*, Link*/ } from 'react-router-dom';

function Quote({ match, location }) {
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
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="blog animate-bottom">
                {
                    quotes ?
                        quotes.quotes.length > 0 ?
                            quotes.quotes.map(quote =>
                                <div key={quote.title}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            `<h1>${quote.title}</h1>`
                                            + `<div class="author">
                                            <img class="authorImg" src="${quote.authorImageUrl}" alt="Skill Curves Author"/>`
                                            + `<div style="flex-direction: column">
                                <span><strong>${quote.authorName}</strong></span>
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