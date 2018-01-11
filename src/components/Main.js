import React from "react";
import _ from "lodash";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {
  Table,
  TableRow,
  TableRowColumn,
  TableBody,
  RaisedButton
} from "material-ui";

const mainStyle = {
  margin: "10px"
};

const Main = props => {
  const { data, fetchData } = props;
  return (
    <div style={mainStyle}>
      <RaisedButton
        label="Fetch Google"
        onClick={() => {
          fetchData("http://google.com");
        }}
      />
    </div>
  );
};

export default Main;
