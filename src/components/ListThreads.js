import React, { Component } from 'react';
import ThreadItem from './ThreadItem'

class ListThreads extends Component {
  render() {
      let threadItems;
      if(this.props.threads){
          threadItems = this.props.threads.map(thread => {
            return (
                <ThreadItem key={thread.id} thread={thread} />
          );
          });
      }
    return (
      <div className="ListThreads">
        <h3>Threads</h3>
        {threadItems}
      </div>
    );
  }
}

export default ListThreads;