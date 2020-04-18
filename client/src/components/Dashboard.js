import React, { Fragment } from "react";
import { connect } from "react-redux";
import IntroCard from "./IntroCard";

const Dashboard = (props) => {
  const { sites } = props;
  return (
    <Fragment>
      <div className="row" style={{ height: "15px" }}>
        {" "}
      </div>
      {sites.length && sites.map((el) => <IntroCard info={el} key={el.id} />)}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    sites: state.dashboardReducer.sites,
  };
};

export default connect(mapStateToProps)(Dashboard);
