import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Join } from "./components/Pages/Join";
import { Team } from "./components/Pages/Team";
import { Contact } from "./components/Pages/Contact";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/join" component={Join} />
            <Route path="/Team" component={Team} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
