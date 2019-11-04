import React, { Component } from "react";
import "./App.css";
import SwapiRequest from "../../services";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorIndicater from "../ErrorIndicater";
import { SwapiserviceProvider } from "../SwapiServiceContext";
import {
  PlanetPage,
  StarshipPage,
  PeoplePage,
  LoginPage,
  SecretPage
} from "../Pages";
import ErrorBoundry from "../ErrorBoundry";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { StarshipDetails, PlanetDetails, PeopleDetails } from "../swComponents";
export default class App extends Component {
  swapiService = new SwapiRequest();
  state = {
    hasError: false,
    isLoggedIn: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    const { isLoggedIn } = this.state;
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    return (
      <ErrorBoundry>
        <SwapiserviceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <h2>Welcom to StarDB</h2>}
                ></Route>
                <Route path="/people" exact component={PeoplePage} />
                <Route path="/planets" exact component={PlanetPage} />
                <Route
                  path="/planets/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <PlanetDetails itemId={id} />;
                  }}
                />
                <Route path="/starships" exact component={StarshipPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/people/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <PeopleDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoddenIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                ></Route>
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                ></Route>
                {/* <Redirect to="/" /> */}
                <Route
                  render={() => <h2>Error 404! Page not found!</h2>}
                ></Route>
              </Switch>
            </div>
          </Router>
        </SwapiserviceProvider>
      </ErrorBoundry>
    );
  }
}
