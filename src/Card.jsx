import React from "react";

function Card(props) {
  return (
    <>
      <div
        style={{ border: "solid 10px red", width: "400px", height: "300px" }}
      >
        <img src={props.image} alt="" />
        <p>MovieName:{props.MovieName}</p>
        <p>Rating:{props.Rating}</p>
      </div>
    </>
  );
}

export default Card;
