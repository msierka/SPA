import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <Router>
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <nav>
            <Navigation/>
          </nav>
          <section>
            <Page/>
          </section>
        </main>
        <footer><Footer/></footer>
      </div>
      </Router>
    );
  }
}
 
export default App;