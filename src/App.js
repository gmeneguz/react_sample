import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import State from "./pages/2_State";
import JSX from "./pages/1_JSX";
import Home from "./pages/home";
import Props from "./pages/3_Props";
import Effects from "./pages/4_Effects";
import Responsiveness from "./pages/5_Responsiveness";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Switch>
          <Route path="/JSX">
            <JSX />
          </Route>
          <Route path="/state">
            <State />
          </Route>
          <Route path="/props">
            <Props />
          </Route>
          <Route path="/effects">
            <Effects />
          </Route>
          <Route path="/responsividade">
            <Responsiveness />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
