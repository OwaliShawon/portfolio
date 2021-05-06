import { Container, Grid } from '@material-ui/core';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Resume from './pages/Resume/Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from './pages/Portfolio/Portfolio/Portfolio';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{ margin: '20px' }}>
          <Profile></Profile>
        </Grid>
        <Grid item xs style={{ marginTop: '20px' }}>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Portfolio></Portfolio>
              </Route>
              <Route to="projects">
                <Projects></Projects>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
