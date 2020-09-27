import React, { Fragment, useState, useEffect }  from 'react';

function Article({ match, location }) {
    const options = { /*weekday: 'short',*/ year: 'numeric', month: 'short', day: 'numeric' };

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetch(`https://skillcurves.herokuapp.com/blogarticles?articleName=${location.pathname.replace("/","")}`)
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    // console.log("match", match, "location", location.pathname);

    return (
        <Fragment>
            <a href="/">
                <img src={require('../images/Yellow on Transparent Logo.png')} alt="Skill Curves Logo" width="45" height="auto" className="logo" />
            </a>
            <div className="contentStart"></div>
            <div className="blog">
                {
                    articles?
                    articles.articles.map(article => 
                    <div key={article.title}
                        dangerouslySetInnerHTML={{__html: 
                            `<h1>${article.title}</h1>`
                            +`<div class="author">
                            <img class="authorImg" src="${article.authorImageUrl}" alt="Skill Curves Author"/>`
                            +`<div style="flex-direction: column">
                            <span><strong>${article.authorName}</strong></span>
                            <span>${new Date(article.createdAt).toLocaleDateString(undefined, options)}</span>
                            </div>
                            </div>`
                            + article.sanitizedHtml}}
                    />
                    )
                    :
                    <h1>Loading...</h1>
                }
            </div>
        </Fragment>
    );
}

export default Article;