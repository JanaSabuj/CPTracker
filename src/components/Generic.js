import React, { useEffect } from "react";
import { fetchUsers } from "../redux/generic/genericActions";
// import { setSiteName } from "../redux/generic/genericActions";
import { connect } from "react-redux";
import GenericContest from "./GenericContest";

const Generic = props => {
  useEffect(() => {
    const site_name = props.match.params.generic_site;
    console.log(site_name);
    fetchUsers(site_name);
    // props.setSiteName(site_name);
    //eslint-disable-next-line
  }, [props.match.params.generic_site]);

  return (
    <div className="container">
      {" "}
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>{props.siteName}</h4>
        </li>
        <GenericContest />
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    siteName: state.genericReducer.siteName,
    siteInfo: state.genericReducer.siteInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: name => dispatch(fetchUsers(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generic);
