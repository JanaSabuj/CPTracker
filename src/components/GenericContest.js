import React from "react";

const GenericContest = props => {
  return (
    <li className="collection-item avatar grey lighten-5">
      <img src="images/yuna.jpg" alt="" className="circle" />
      {console.log(props)}
      <span className="title">{props.event}</span>
      <p>
        First Line
        <br />
        Second Line
      </p>
      <a href="/#" class="secondary-content">
        <i class="material-icons">send</i>
      </a>
    </li>
  );
};

export default GenericContest;
