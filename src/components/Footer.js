import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render(){
    return (
      <div className="Footer">
        <Footer>
          <Link to='/home' />
          <Link to='/posts' />
          <Link to='/about' />
          <Link to='/contact' />
          <Link to='/support' />
        </Footer>
      </div>
    )
  }
}

export default Footer;