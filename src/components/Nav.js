import React, {Component} from 'react';
import LoginButtons from './components/LoginButtons';
import {Link} from 'react-router-dom';

class Nav extends Component {
constructor(){
  super();
  this.state = {
    isLoggedIn: false
  }
}

loggedIn(){
  axios.get('/token')
    .then((response) => {
      this.setState({isLoggedIn: response.data})
    })
    .catch((err) => {
      console.log(err)
    })
}
  render(){
    return (
      <nav>
        <Link to="/" >Home</Link>
        <LoginButtons isLoggedIn={} />
      </nav>
    )
  }
}

export default Nav;