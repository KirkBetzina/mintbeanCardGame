import AboutUs from './pages/AboutUs';
import './App.css';
import SplashPage from './pages/Splash';
import Main from './pages/Main'
import Footer from './components/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const getLogin = (username, password) => {
    fetch(url + '/login/' + username + '/' + password)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      if (data.status === 200)
      {
        setUser("Need to figure out the props for setUser")
        props.history.push('/home')
      } else if (data.status === 409) {
        alert('username does not exist')
        props.history.push('/create')
      } else if (data.status === 403) {
        alert('username or password is WRONG!')
      }
      

    })
  }

  //handle create for the form
const handleCreate = (newUser) => {
  fetch(url + "/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
  }).then((response) => response.json())
  .then((data) =>  {
    console.log(data.status)
    if(data.status === 200)
    {
    setUser(data.data._id)
    props.history.push('/home')
  
  } else if (data.status === 403) {
    alert('username already exists')
    props.history.push('/login')
  }

  })
};
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/'>
        <Redirect to='/login' />
        </Route>  */}
      <Route exact path='/'>
        <SplashPage />
      </Route>
      <Route
          path="/login"
        >
          <Login 
            setUser={setUser}
            getLogin={getLogin}
          />
        </Route>
        <Route
          path="/create"
        >
          <CreateAccount 
            setUser={setUser}
            handleCreate={handleCreate}
          />
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
