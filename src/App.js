import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/mobile.css";
import ParticipantNameEntry from "./components/ParticipantNameEntry";
import ParticipantsDisplayTable from "./components/ParticipantsDisplayTable";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <div className="appBackground">
            <div className="appContainer">
              <p className="appHeaderFooter">Table.. Football... Tournament!</p>
              <Switch>
                <Route path="/participants" component={ParticipantNameEntry} />
                <Route path="/winner" component={ParticipantsDisplayTable} />
                <Redirect from="/" exact to="/participants" />
                <Redirect to="/not-found" />
              </Switch>
              <p className="appHeaderFooter">{/* T...T...T */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
