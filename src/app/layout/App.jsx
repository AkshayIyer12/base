import React, { PureComponent } from 'react';

import { auth, googleAuthProvider } from '../../constants/firebase';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar/Navbar';

class App extends PureComponent {
  state = { user: null };

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">Starter Kit</h1>
        </header>
        <Container className="main">
          <EventDashboard />
          {this.state.user ? (
            <button onClick={() => auth.signOut()}>Logout</button>
          ) : (
            <Button
              content="Signup/Login"
              onClick={() => auth.signInWithPopup(googleAuthProvider)}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
