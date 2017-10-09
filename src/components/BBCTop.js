import React, { Component } from 'react';
import axios from 'axios';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import BBCItem from './BBCItem'


class BBCTop extends Component {
  constructor(){
    super();
    this.state = {
      HeadLines: []
    }
  }

  getBBC(){
    this.setState({HeadLines: []});
    axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=170b3877161749428bca8fec6450cb93')
      .then((topStories) => {
        this.setState({HeadLines: topStories.data.articles})
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  componentWillMount(){
    this.getBBC();
  }

  componentDidMount(){
    setInterval(()=>{this.getBBC()}, 240000)
  }

  render() {
      let BBCItems;
      if (this.state.HeadLines[1]){
        BBCItems = this.state.HeadLines.map( story => {
            return <BBCItem key={story.title} story={story} />
        })
      }
    return (
      <div className="BBCTop">
        <p>Hi, Im the BBCTop.js</p>
        <div className="carousel">
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-slide"
          >
            {BBCItems}
          </React_Bootstrap_Carousel>
        </div>
      </div>
    );
  }
}

export default BBCTop;
