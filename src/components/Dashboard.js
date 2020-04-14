import React, { Fragment } from "react";
import { connect } from "react-redux";
import IntroCard from "./IntroCard";

const Dashboard = props => {
  const { sites } = props;

  const introCards = (
    <Fragment>
      {sites.length &&
        sites.map(el => <IntroCard sites={sites} key={sites.id} />)}
    </Fragment>
  );

  return (
    <Fragment>
      <div className="row" style={{ height: "15px" }}>
        {" "}
      </div>
      <div className="row">{introCards}</div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    sites: state.dashboardReducer.sites
  };
};

export default connect(mapStateToProps)(Dashboard);
