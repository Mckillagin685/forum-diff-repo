import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ListThreads from './components/ListThreads';
import ListPosts from './components/ListPosts';
import ListComments from './components/ListComments';
import BBCTop from './components/BBCTop'
import LoginButtons from './components/LoginButtons'
import axios from 'axios';
import "./index.css"

class App extends Component {
  constructor(){
    super();
    this.state = {
      Threads: [],
      Posts: [],
      Comments: [],
    }
  }

  getThreads(){
    axios.get('/threads')
    .then((response) => {
      this.setState({Threads: response.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getPosts(){
    axios.get('/posts')
    .then((response) => {
      this.setState({Posts: response.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getComments(){
    axios.get('/comments')
    .then((response) => {
      this.setState({Comments: response.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  componentWillMount(){
    this.getThreads();
    this.getPosts();
    this.getComments();
  }

  componentDidMount(){
    this.getThreads();
    this.getPosts();
    this.getComments();
  }
  render() {
    // const View = () => (
    //   <div>
    //     <nav>
          
    //     </nav>
    //     <div>
    //       <Route path="/" exact render={() => <ListThreads />}/>
    //     </div>
    //   </div>
    // )
    return (
      <div className="App">
        <p>Hi, Im the App.js</p>
        {/* <BrowserRouter>
          <View />
        </BrowserRouter> */}
        {/* <ListThreads threads={this.state.Threads}/> */}
        {/* <ListPosts Posts={this.state.Posts}/> */}
        {/* <ListComments comments={this.state.Comments}/> */}
        {/* <LoginButtons isLoggedIn={false}/> */}
      </div>
    );
  }
}

export default App;
