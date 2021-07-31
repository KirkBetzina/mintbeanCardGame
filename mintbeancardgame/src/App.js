import AboutUs from './pages/AboutUs';
import './App.css';
import SplashPage from './pages/Splash';
import Footer from './components/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/'>
      <Redirect to='/login' />
      </Route> 
    <SplashPage />
    <Route path ='/about'><AboutUs /></Route>
    </Switch>
    <footer><Footer/></footer>
    </div>
  );
}

export default App;
