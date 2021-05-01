import { Container, Grid } from '@material-ui/core';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{ backgroundColor: 'blue' }}>
          <Profile></Profile>
        </Grid>
        <Grid item xs style={{ backgroundColor: 'red' }} >
          <Header></Header>
          <Router>
            <Switch>
              <Route exact path="/">
                <Portfolio></Portfolio>
              </Route>
              <Route path="/resume">
                <Resume></Resume>
              </Route>
              {/* <Route path="/dashboard">
                  <Dashboard />
                </Route> */}
            </Switch>
          </Router>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
