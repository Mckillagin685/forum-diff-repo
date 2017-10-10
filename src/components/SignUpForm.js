import React, { Component } from 'react';

class SignUpForm extends Component {

// **** https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router ****

// **** https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link ****

// **** https://moduscreate.com/reactjs-form-validation-approaches/ ****

  handleSignUp(e){
    e.preventDefault();
    // axios.post("/user", {
    //   Email: this.refs.email,
    //   Password: this.refs.password
    // })
    // .then(response => response)
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  render() {

    return(
      <div className="SignUpForm">
        <form onSubmit={this.handleSignUp()}>
          <div>
            <label>First Name</label>
            <input type="text" ref="first_Name"/>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" ref="last_Name"/>
          </div>
          <div>
            <label>Email</label>
            <input type="text" ref="email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="text" ref="password"/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="text" ref="confirm_Password"/>
          </div>
          <button type="submit" value="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;