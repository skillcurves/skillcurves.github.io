import React, { Fragment, useState, useEffect } from 'react';
import { Redirect /*, Link*/ } from 'react-router-dom';
import Helmet from 'react-helmet';

function Article({ match, location }) {
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
            <Helmet>
                <title>Skill Curves | {articles !== null ? articles.articles[0].title : "Skill Curves Blog Article"} </title>
                <meta name="description" content={articles !== null ? articles.articles[0].description : "Skill Curves"}></meta>
                <meta name="robots" content={articles !== null ? articles.articles[0].metadataKeywords: "Skill Curves"}></meta>
            </Helmet>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="blog animate-bottom">
                {
                    console.log(articles)
                }
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