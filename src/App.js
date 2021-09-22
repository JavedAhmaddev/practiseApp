import './App.css';
import Navbar from './components/Navbar';
import Link1 from './components/Link1'
import Link2 from './components/Link2'
import Link3 from './components/Link3'
import Link4 from './components/Link4'
import Action from './components/Action'
import Action2 from './components/Action2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page404 from './Page404';
import Home from './components/Home';


function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/link1">
            <Link1 />
          </Route>
          <Route exact path="/link2">
            <Link2 />
          </Route>
          <Route exact path="/link3">
            <Link3 />
          </Route>
          <Route exact path="/link4">
              <Link4 />
            </Route>
          <Route exact path="/action">
            <Action />
          </Route>
          <Route exact path="/action2">
            <Action2 />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
