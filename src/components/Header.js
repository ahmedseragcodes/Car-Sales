import React from 'react';
import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};


const mapStateToProps=(state)=>{
  return ({
      additionalPrice: state.additionalPrice,
      features: 
        state.car.features
  })
}

export default connect(mapStateToProps)(Header);
