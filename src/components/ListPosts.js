import React, { Component } from 'react';
import PostItem from './PostItem'

class ListPosts extends Component {
  render() {
      let postItems;
      if(this.props.Posts){
          postItems = this.props.Posts.map(post => {
            return (
                <PostItem key={post.id} post={post} />
          );
          });
      }
    return (
      <div className="ListPosts">
        <h3>Posts</h3>
        {postItems}
      </div>
    );
  }
}

export default ListPosts;