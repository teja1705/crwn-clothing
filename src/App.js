import React from 'react';
import './App.css';
import { Switch,Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

// const Hatspage = (props)=>(
//   <div>
//     <button onClick={()=> props.history.push("/")}>HomePage</button>
//     <h1>HatsPage</h1>
//   </div>
// )
// const Menspage = (props)=>(
//   <div>
//     <Link to="/">Homepage</Link>
//     <h1>MensPage</h1>
//   </div>
// )
class App extends React.Component 
{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      if(user)
      {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
            })
          })
      }
      else{
        setCurrentUser(user)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log("componentWillMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    )
  }
  }

  const mapStateToProps = ({user})=>({
    currentUser : user.currentUser
  })

  const mapDispatchToProps = dispatch =>({
    setCurrentUser: (user)=> dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
