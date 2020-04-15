import React, { useEffect } from "react";
import { fetchUsers } from "../redux/generic/genericActions";
import { connect } from "react-redux";
import GenericContest from "./GenericContest";
import Spinner from "./Spinner";

const Generic = props => {
  useEffect(() => {
    const site_name = props.match.params.generic_site;
    props.fetchUsers(site_name);
    //eslint-disable-next-line
  }, [props.match.params.generic_site]);

  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col s1 m3"> </div>
          <div className="col s10 m6">
            <ul className="collection with-header brown darken-1">
              <li className="collection-header active brown darken-1">
                <h4 className="white-text">{props.siteName}</h4>
              </li>
              {/* {(console.log(props.siteInfo), "litt")} */}
              {props.siteInfo.map(el => (
                <GenericContest key={el.id} contest={el} />
              ))}
            </ul>
          </div>
          <div className="col s1 m3"> </div>
        </div>
      )}
    </>
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
    fetchUsers: name => dispatch(fetchUsers(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generic);
