import React, { Component } /*, { useEffect } */ from 'react';
// import logo from './logo.svg';
import './App.css';
import './Banner.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: { x: 0, y: 0 },
      shadow: true,
      colors: [
        {
          "background": "#1c2550",
          "text": "#ffffff",
          "bold": "#FCF751"
        }, {
          "background": "#1c2550",
          "text": "#ffffff",
          "bold": "#FCF751"
        }],
      background: null,
      text: null,
      bold: null
    };
  }

  componentDidMount() {
    this.RandomBackground();
  }

  RandomBackground() {
    let getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let RandomID = getRandomInt(0, 1);

    console.log(RandomID);

    this.setState({
      background: this.state.colors[RandomID].background,
      text: this.state.colors[RandomID].text,
      bold: this.state.colors[RandomID].bold
    })
  }

  render() {
    let sectionStyle = {
      backgroundColor: this.state.background,
      color: this.state.text
    }
    let boldStyle = {
      color: this.state.bold
    }

    const hamburger = (event) => {
      let x = document.getElementById("navigationId");
      if (x.className === "navigation") {
        x.className += " responsive";
      } else {
        x.className = "navigation";
      }
    }

    return (
      <div>
        <div className="navigation" id="navigationId">
          <span className="active">Home</span>
          <span>About Us</span>
          <span>Blog</span>
          <span>Quotes Corner</span>
          <span>Contact</span>
          <span className="icon" onClick={hamburger}>
            <i className="fa fa-bars"></i>
          </span>
        </div>

        <section id="app" style={sectionStyle}>
          <h1 className="middle">
            Learning <span className="bold" style={boldStyle}>Skills</span> .
					<br />
					Leading <span className="bold" style={boldStyle}>Profits</span> .
				</h1>
        </section>
      </div>
    )
  }
}

export default App;