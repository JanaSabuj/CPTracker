import React, { useEffect } from "react";
import { fetchUsers } from "../redux/generic/genericActions";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { Link, Route } from "react-router-dom";
import { setLocalContest } from "../redux/generic/genericActions";
import GenericWrapper from "./GenericWrapper";
import { setSiteName } from "../redux/generic/genericActions";

const Generic = props => {
  useEffect(() => {
    const site_name = props.match.params.generic_site;

    let found = false;
    const data = props.localStorage;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === site_name.toLowerCase()) {
        found = true;
        break;
      }
    }

    if (!found) {
      props.fetchUsers(site_name); // main func call
      console.log("Calling", site_name.toLowerCase());
    } else {
      props.setSiteName(site_name);
    }

    //eslint-disable-next-line
  }, [props.match.params.generic_site]);

  const subLinkStyle = {
    // fontWeight: "bold",
    fontFamily: "Oxygen",
    color: "black"
  };

  const GenericWrapperWithPropsFuture = props1 => {
    return (
      <GenericWrapper
        data={props.localStorage}
        contestType="future"
        contestName={props.siteName.toLowerCase()}
        {...props1}
      />
    );
  };

  const GenericWrapperWithPropsLive = props1 => {
    return (
      <GenericWrapper
        data={props.localStorage}
        contestType="live"
        contestName={props.siteName.toLowerCase()}
        {...props1}
      />
    );
  };

  const GenericWrapperWithPropsPast = props1 => {
    return (
      <GenericWrapper
        data={props.localStorage}
        contestType="past"
        contestName={props.siteName.toLowerCase()}
        {...props1}
      />
    );
  };

  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col s1 m3"> </div>
          <div className="col s10 m6">
            <div className="card brown darken-1 fixed">
              <div className="card-content white-text">
                <i className="small material-icons yellow-text">location_on</i>
                <span className="card-title">
                  {props.siteName.toUpperCase()}
                </span>
              </div>
              <div className="card-tabs blue-grey">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab">
                    <Link to={props.match.url + "/future"} style={subLinkStyle}>
                      Future
                    </Link>
                  </li>
                  <li className="tab">
                    <Link
                      className="active"
                      to={props.match.url + "/live"}
                      style={subLinkStyle}
                    >
                      Live
                    </Link>
                  </li>
                  <li className="tab">
                    <Link
                      to={props.match.url + "/past"}
                      className=""
                      style={subLinkStyle}
                    >
                      Past
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* // sub Routes */}
            <Route
              path={props.match.url + "/live"}
              render={GenericWrapperWithPropsLive}
            />
            <Route
              path={props.match.url + "/future"}
              render={GenericWrapperWithPropsFuture}
            />
            {/* <Redirect from="/steps" exact to="/steps/whatever" /> */}
            <Route
              path={props.match.url + "/past"}
              render={GenericWrapperWithPropsPast}
            />
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
    loading: state.genericReducer.loading,
    localStorage: state.genericReducer.localStorage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: name => dispatch(fetchUsers(name)),
    setLocalContest: (name, data) => dispatch(setLocalContest(name, data)),
    setSiteName: name => dispatch(setSiteName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generic);
