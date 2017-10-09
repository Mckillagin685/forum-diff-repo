import React, { Component } from 'react';

class PostItem extends Component {

  render() {
    return (
      <li className="Post">
          <strong>{this.props.post.title}</strong>
      </li>
    );
  }
}

export default PostItem;
