import React, { useEffect } from "react";
import { fetchUsers } from "../redux/generic/genericActions";
import { connect } from "react-redux";
import GenericContest from "./GenericContest";
import Spinner from "./Spinner";
import NoContest from "./NoContest";
import { Link, Route } from "react-router-dom";
import { epochCalculation } from "../utils/epochCalculation";

const Generic = props => {
  useEffect(() => {
    const site_name = props.match.params.generic_site;
    props.fetchUsers(site_name);
    console.log(props.siteInfo);
    //eslint-disable-next-line
  }, [props.match.params.generic_site]);

  const subLinkStyle = {
    // fontWeight: "bold",
    fontFamily: "Oxygen",
    color: "black"
  };

  const segregateContests = () => {
    let allContests = props.siteInfo;
    console.log(allContests);

    let tempObj = {
      live: [],
      past: [],
      future: []
    }; // will be named codechef later

    for (let i = 0; i < allContests.length; i++) {
      const { end, start } = allContests[i];
      const { startEpoch, endEpoch, presentEpoch } = epochCalculation(
        start,
        end
      );

      if (presentEpoch < startEpoch) tempObj["future"].push(allContests[i]);
      else if (presentEpoch <= endEpoch) tempObj["live"].push(allContests[i]);
      else tempObj["past"].push(allContests[i]);
      console.log(tempObj);
    }
  };

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
              <div class="card-tabs blue-grey">
                <ul class="tabs tabs-fixed-width">
                  <li class="tab">
                    <Link to={props.match.url + "/future"} style={subLinkStyle}>
                      Future
                    </Link>
                  </li>
                  <li class="tab">
                    <Link
                      className="active"
                      to={props.match.url + "/live"}
                      style={subLinkStyle}
                    >
                      Live
                    </Link>
                  </li>
                  <li class="tab">
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
            {props.siteInfo.length && segregateContests()}
            <Route path={props.match.url + "/live"} component={Spinner} />
            <Route path={props.match.url + "/future"} component={Spinner} />
            <Route path={props.match.url + "/past"} component={Spinner} />

            {/* {props.siteInfo.length === 0 ? (
              <NoContest name={props.siteName} />
            ) : (
              props.siteInfo.map(el => (
                <GenericContest key={el.id} contest={el} />
              ))
            )} */}
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
