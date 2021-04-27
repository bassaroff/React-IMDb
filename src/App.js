import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import React, {useState, useEffect} from 'react'
import Footer from './components/Footer/Footer';
import MoviePage from './components/pages/MoviePage'
import SignIn from './components/Registration/SignIn';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Profile from './components/pages/Profile';
import AdminPage from './components/pages/AdminPage';

function App(props) {
  const [blackNav, setBlackNav] = useState(true);
  const [isLogin, setIsLogin] = useState(false)
  const history = useHistory()

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setIsLogin(true)
    }else{
      if (history) {
        history.push('/login')
      }
    }
  },[])


  useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10){
            setBlackNav(true);
        }else{
            setBlackNav(false);
        }
    }
    window.addEventListener('scroll', scrollListener);
    return() => {
        window.removeEventListener('scroll', scrollListener);
    }
},[blackNav])
  return (
    <>
    {/* <Router>
      <Switch>
        <Route path='/admin' exact component={AdminPage}></Route>
      </Switch>
    </Router> */}
    <Router>
      <Navbar black = {blackNav} isLogin={isLogin}/>
      <div className='main-margin'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/watch/:id' component={MoviePage}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
