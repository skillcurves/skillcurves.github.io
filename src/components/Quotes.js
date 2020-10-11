import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Quotes() {
    const options = { /*weekday: 'short',*/ year: 'numeric', month: 'short', day: 'numeric' };

    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const abortController = new AbortController();
        const signal = abortController.signal;
        //http://localhost:5000
        fetch('https://skillcurves.herokuapp.com/blogquotes', { signal: signal })
            .then(response => response.json())
            .then(data => setQuotes(data));
        return function cleanup() {
            abortController.abort();
        }
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="quotelinks animate-bottom">
                {
                    quotes ?
                        quotes.quotes.map(quote =>
                            <div key={quote.slug} className="quoteLink">
                                <div className="inner">
                                    <div className="box">
                                        <div className="text">
                                            <i className="start-quote fas fa-quote-left"></i>
                                            <div>
                                            <Link rel="preload" to={"/quote/" + quote.slug} key={quote.slug}>{quote.title}</Link>
                                            <div className="quote">{quote.quote}</div>
                                            <div className="credit">{quote.authorName}, {new Date(quote.createdAt).toLocaleDateString(undefined, options)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
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

export default Quotes;