import React from "react";

const GenericContest = props => {
  return (
    <li class="collection-item">
      <div>
        {props.content}
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
      </div>
    </li>
  );
};

export default GenericContest;