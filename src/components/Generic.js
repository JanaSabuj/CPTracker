import React, { Component } from "react";

class Generic extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    const id = this.props.match.params.generic_site;
    console.log(id);
    this.setState({
      id: id
    });
    // eslint-disable-next-line
  }

  render() {
    return (
      <div className="container">
        {" "}
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>{this.state.id}</h4>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Generic;
