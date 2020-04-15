import React, { useEffect } from "react";
import { fetchUsers } from "../redux/generic/genericActions";
import { setSiteName } from "../redux/generic/genericActions";
import { connect } from "react-redux";
import GenericContest from "./GenericContest";
import Spinner from "./Spinner";

const Generic = props => {
  useEffect(() => {
    const site_name = props.match.params.generic_site;
    props.fetchUsers(site_name);
    props.setSiteName(site_name);
    //eslint-disable-next-line
  }, [props.match.params.generic_site]);

  return (
    <div className="container">
      {" "}
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>{props.siteName}</h4>
        </li>

        {props.loading ? (
          <Spinner />
        ) : (
          props.siteInfo.map(el => (
            <GenericContest key={el.id} content={el.event} />
          ))
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    siteName: state.genericReducer.siteName,
    siteInfo: state.genericReducer.siteInfo,
    loading: state.genericReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: name => dispatch(fetchUsers(name)),
    setSiteName: name => dispatch(setSiteName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generic);
