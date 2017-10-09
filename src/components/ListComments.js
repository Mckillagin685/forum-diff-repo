import React, { Component } from 'react';
import CommentItem from './CommentItem'

class ListComments extends Component {
  render() {
      let commentItems;
      if(this.props.comments){
          commentItems = this.props.comments.map(comment => {
            return (
                <CommentItem key={comment.id} comment={comment} />
          );
          });
      }
    return (
      <div className="ListComments">
        <h3>Comments</h3>
        {commentItems}
      </div>
    );
  }
}

export default ListComments;