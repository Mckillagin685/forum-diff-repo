import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class LoginButtons extends Component {
  constructor(){
    super();
    this.state = {
      firstName: ''
    }
  }

  getFirstName(){
    axios.get('users/firstName')
      .then((response) => {
        this.setState({firstName: response.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setButtons() {
    if(this.props.isLoggedIn){
      this.getFirstName()
      return (
        <div>
          <h2>Hello, {this.props.firstName}</h2>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    }else{
      return (
        <div>
          <Link to="/Login"><button>login</button></Link>
          <Link to="/Sign-Up"><button>sign-up</button></Link>
        </div>
      )
    }
  }

  logout(){
    axios.delete('/token')
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render(){
    return (
      <div className="LoginButtons">
        <p>Hi Im LoginButtons</p>
        {this.setButtons()}
      </div>
    )
  }
}

export default LoginButtons;