import React, { Component } from 'react';

class ContentForm extends Component {
  handle
  render() {
    let setForm;
    let isAdd = this.props.isAdd
    let section = this.props.section

    // switch (true) {
    //   case :
    // }
    return(
      <div className="ContentForm">
        <form onSubmit={formAction}>
          {setForm}
        </form>
      </div>
    );
  }
}

export default ContentForm;
