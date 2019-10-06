import React from "react";
import "./Spinner.css";

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="lds-css ng-scope">
        <div className="lds-double-ring">
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
