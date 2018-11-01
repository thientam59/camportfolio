import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, About } from "./components";

const Works = () => <h2>Works</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/works/" component={Works} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
