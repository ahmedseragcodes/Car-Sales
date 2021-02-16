import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = props => {

const handleNewFeature=(feature)=>{
  console.log(feature);
  addFeature(feature);
}


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleNewFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps=(state)=>{
  return ({
    car: {
      features: [
        state.features
      ]
    },
  })
}

export default connect(mapStateToProps)(AdditionalFeature);
