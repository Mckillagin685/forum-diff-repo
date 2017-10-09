import React, { Component } from 'react';

class ThreadItem extends Component {

  render() {
    console.log
    return (      
      <li className="Thread">
          <strong>{this.props.thread.title}</strong>
      </li>
    );
  }
}

export default ThreadItem;
