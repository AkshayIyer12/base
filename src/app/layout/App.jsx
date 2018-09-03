import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { auth, googleAuthProvider } from "../../constants/firebase";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";
import EventForm from "../../features/events/EventForm/EventForm";
import EventDetailedPage from "../../features/events/EventDetailsPage/EventDetailsPage";
import PeopleDashboard from "../../features/user/peopleDashboard/PropleDashboard";
import UserDetails from "../../features/user/userDetails/userDetails";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import HomePage from "../../features/home/Home";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  // state = { user: null };

  // componentDidMount() {
  //   auth.onAuthStateChanged(user => this.setState({ user }));
  // }

  render() {
    return (
      <div>
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">Starter Kit</h1>
        </header>
        <Container className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/test" component={TestComponent} />
            <Route path="/events" component={EventDashboard} />
            <Route path="/events/:id" component={EventDetailedPage} />
            <Route path="/people" component={PeopleDashboard} />
            <Route path="/profile/:id" component={UserDetails} />
            <Route path="/settings" component={SettingsDashboard} />
            <Route path="/createEvent" component={EventForm} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;

// {this.state.user ? (
//   <button onClick={() => auth.signOut()}>Logout</button>
// ) : (
//   <Button
//     content="Signup/Login"
//     onClick={() => auth.signInWithPopup(googleAuthProvider)}
//   />
// )}
