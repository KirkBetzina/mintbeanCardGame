import AboutUs from './pages/AboutUs';
import './App.css';
import SplashPage from './pages/Splash';
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/'>
      <Redirect to='/login' />
      </Route> 
    <SplashPage />

    <AboutUs />
    </Switch>
    </div>
  );
}

export default App;
