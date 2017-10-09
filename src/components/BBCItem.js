import React, { Component } from 'react';

class BBCItem extends Component {
  render() {
      console.log(this.props)
      var headlineImage = {
        position: "relative", 
        width: "100%",
        display: "flex"
      }
      var headlineText = {
        position: "absolute", 
        top: "20px", 
        left: "0", 
        width: "100%"
      }

      var headlineDesc = {
        position: "absolute", 
        top: "100px", 
        left: "0", 
      }

    return (
      <div className="BBCItem">
        <div style={headlineImage}>
          <img src={this.props.story.urlToImage} alt={this.props.story.url}/>
          <h3 style={headlineText}><span className="titleSpan">{this.props.story.title}</span></h3>
          <p style={headlineDesc}><span className="titleSpan">{this.props.story.description}</span></p>
        </div>
      </div>
    );
  }
}


export default BBCItem;