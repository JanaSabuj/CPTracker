import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import { epochCalculation } from "../utils/epochCalculation";
import { durationModified } from "../utils/durationModified";

const GenericWrapper = props => {
  const { data, contestType } = props;
  console.log(props);
  return <>hi</>;
};

export default GenericWrapper;
