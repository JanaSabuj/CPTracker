import React, { useEffect } from "react";
import { fetchUsers } from "../redux/generic/genericActions";
import { connect } from "react-redux";
import GenericContest from "./GenericContest";
import Spinner from "./Spinner";
import NoContest from "./NoContest";

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
            <div class="card brown darken-1">
              <div class="card-content white-text">
                <i class="small material-icons yellow-text">location_on</i>
                <span class="card-title">{props.siteName.toUpperCase()}</span>
              </div>
            </div>
            {/* {(console.log(props.siteInfo), "litt")} */}
            {props.siteInfo.length === 0 ? (
              <NoContest name={props.siteName} />
            ) : (
              props.siteInfo.map(el => (
                <GenericContest key={el.id} contest={el} />
              ))
            )}
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
