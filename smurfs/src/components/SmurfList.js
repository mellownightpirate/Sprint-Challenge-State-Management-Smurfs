import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllSmurfs, postNewSmurf } from "../state/actionCreators";
import SmurfForm from "./SmurfForm";
import "./App.css";

const SmurfList = props => {
  const smurfs = props.fetchAllSmurfs;
  useEffect(() => {
    smurfs();
  }, [smurfs]);



  return (
    <div className="smurfs">
      <SmurfForm postNewSmurf={props.postNewSmurf} />
      <div className="smurfList">
        {props.smurf.map(smurf => (
          <div className="smurfCard" key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchAllSmurfs, postNewSmurf })(
  SmurfList
);
