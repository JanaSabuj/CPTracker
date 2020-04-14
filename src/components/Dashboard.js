import React, { Fragment } from "react";
import { connect } from "react-redux";

const Dashboard = props => {
  const { sites } = props;

  const introCards = (
    <Fragment>
      {sites.length &&
        sites.map(el => <div className="white-text"> {el.name} </div>)}
    </Fragment>
  );

  return (
    <div>
      {console.log(sites)}
      {introCards}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sites: state.dashboardReducer.sites
  };
};

export default connect(mapStateToProps)(Dashboard);
