import AboutUs from './pages/AboutUs';
import './App.css';
import SplashPage from './pages/Splash';
import Main from './pages/Main'
import Footer from './components/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/'>
        <Redirect to='/login' />
        </Route>  */}
      <Route exact path='/'>
        <SplashPage />
      </Route>
      <Route path='/play'>
        <Main/>
      </Route>
      <Route path ='/about'>
        <AboutUs />
      </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
