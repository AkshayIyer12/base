import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { auth, googleAuthProvider } from './constants/firebase';

class App extends PureComponent {
  state = { user: null };

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Realsies</h1>
        </header>
        {this.state.user ? (
          <button onClick={() => auth.signOut()}>Logout</button>
        ) : (
          <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
            Signup/Login
          </button>
        )}
      </div>
    );
  }
}

export default App;
