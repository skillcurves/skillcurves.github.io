import React, { Fragment, useState, useEffect } from 'react';
import { Redirect /*, Link*/ } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

function Article({ match, location }) {

    let history = createBrowserHistory();
    ReactGA.initialize('UA-180316702-1');
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    const options = { /*weekday: 'short',*/ year: 'numeric', month: 'short', day: 'numeric' };

    const [articles, setArticles] = useState(null);

    const getArticles = (signal) => {
        fetch(`https://skillcurves.herokuapp.com/blogarticles?articleName=${location.pathname.replace("/", "")}`, { signal: signal })
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.log(error));
        // console.log("called");
    }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        getArticles(signal);
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
                    <title>Skill Curves | {articles !== null ? articles.articles.length>0? articles.articles[0].title : "Skill Curves Blog Article" : "Skill Curves Blog Article"} </title>
                    <meta name="description" content={articles !== null ? articles.articles.length>0?  articles.articles[0].description : "Skill Curves is a passion project which aims to make best of the opportunities in financial market to advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills." : "Skill Curves is a passion project which aims to make best of the opportunities in financial market to advance the cause of financial awareness for all. We are your one stop destination for all relevant financial skills."}></meta>
                    <meta name="robots" content={articles !== null ? articles.articles.length>0? articles.articles[0].metadataKeywords : "Skill Curves, Skillcurves, Karthekeya Udupa, Blog, Article" : "Skill Curves, Skillcurves, Karthekeya Udupa, Blog, Article"}></meta>
                </Helmet>
            </HelmetProvider>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="blog animate-bottom" history={history}>
                {
                    articles ?
                        articles.articles.length > 0 ?
                            articles.articles.map(article =>
                                <div key={article.title}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            `<h1>${article.title}</h1>`
                                            + `<div class="author">
                                <img class="authorImg" src="${article.authorImageUrl}" alt="Skill Curves Author"/>`
                                            + `<div style="flex-direction: column">
                                <span><strong>${article.authorName}</strong></span>
                                <span>${new Date(article.createdAt).toLocaleDateString(undefined, options)}</span>
                                </div>
                                </div>`
                                            + article.sanitizedHtml
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

export default Article;