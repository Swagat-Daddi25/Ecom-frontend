import React from "react";

function Details(props) {
  let details = {
    name: "Swagat",
    age: 22,
    city: "Patna",
  };
  return (
    <>
      <div style={{ border: "2px solid black", backgroundColor: "skyblue" }}>
        <h1>user details</h1>
        <p>name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>city:{props.city}</p>
      </div>
    </>
  );
}

export default Details;
