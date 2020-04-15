import React, { Component } from "react";

class Generic extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    const id = this.props.match.params.generic_site;
    console.log(id);
    // eslint-disable-next-line
  }

  render() {
    return <div className="container white-text"> {this.state.id} </div>;
  }
}

export default Generic;
