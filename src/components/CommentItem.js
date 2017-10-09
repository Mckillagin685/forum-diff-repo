import React, { Component } from 'react';

class CommentItem extends Component {

 render() {
    return (
      <li className="Comment">
          <strong>{this.props.comment.title}</strong>
          <p>{this.props.comment.body}</p>
      </li>
    );
  }
}

export default CommentItem;
