<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Layout from './hocs/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path ='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
>>>>>>> ab3a406af1c080afa03f8c40482b542edf30f239
  );
}

export default App;
