import React, { Component } /*, { useEffect } */ from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Error from './components/Error';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true,
      about: false,
      blog: false,
      quotes: false,
      contact: false
    }
  }

  render() {
    const hamburger = (event) => {
      let x = document.getElementById("navigationId");
      if (x.className === "navigation") {
        x.className += " responsive";
      } else {
        x.className = "navigation";
      }
    }

    const activeClass = (event) => {
      switch (event.currentTarget.id) {
        case 'home':
          this.setState({
            home: true,
            about: false,
            blog: false,
            quotes: false,
            contact: false
          });
          break;
        case 'about':
          this.setState({
            home: false,
            about: true,
            blog: false,
            quotes: false,
            contact: false
          });
          break;
        case 'blog':
          this.setState({
            home: false,
            about: false,
            blog: true,
            quotes: false,
            contact: false
          });
          break;
        case 'quotes':
          this.setState({
            home: false,
            about: false,
            blog: false,
            quotes: true,
            contact: false
          });
          break;
        case 'contact':
          this.setState({
            home: false,
            about: false,
            blog: false,
            quotes: false,
            contact: true
          });
          break;
        default:
          this.setState({
            home: true,
            about: false,
            blog: false,
            quotes: false,
            contact: false
          });
          break;
      }
    }

    return (
      <BrowserRouter>
        <div>
          <div className="navigation" id="navigationId">
            <span className={"nav".concat(" ").concat(this.state.home ? "active" : null)} 
              onClick={activeClass} 
              id="home">
                <Link to={"/"}>Home</Link>
            </span>
            <span className={"nav".concat(" ").concat(this.state.about ? "active" : null)} 
              onClick={activeClass} 
              id="about">
                <Link to={"/about"}>About Us</Link>
            </span>
            <span className={"nav".concat(" ").concat(this.state.blog ? "active" : null)} 
              onClick={activeClass} 
              id="blog">
                <Link to="/blog">Blog</Link>
            </span>
            <span className={"nav".concat(" ").concat(this.state.quotes ? "active" : null)} 
              onClick={activeClass} 
              id="quotes">
                <Link to="/quotes">Quotes Corner</Link>
            </span>
            <span className={"nav".concat(" ").concat(this.state.contact ? "active" : null)} 
              onClick={activeClass} 
              id="contact">
                <Link to="/contact">Contact</Link>
            </span>
            <span className="icon" onClick={hamburger}>
              <i className="fa fa-bars"></i>
            </span>
          </div>
        </div>
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/about"} component={About} />
          <Route path={"https://skillcurves.com/blog"} component={Blog} />
          <Route path={"/quotes"} component={Quotes} />
          <Route path={"/contact"} component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;