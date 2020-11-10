import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <header>
        <h1>A Cool Company</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/1/mission">Mission</Link>
          </li>
          <li>
            <Link to="/about/2/team">Team</Link>
          </li>
          <li>
            <Link to="/about/2/history">History</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:id" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <footer>
        <small>A Cool Company, Inc.</small>
      </footer>
    </div>
  );
}

export default App;
