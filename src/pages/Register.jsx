import React from "react";
import { useState } from "react";
function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // function which handles my details
  let submitdetails = async (e) => {
    e.preventDefault();

    // send the details to the backend
    let data = { username, password, email };
    let result = await fetch("https://ecombackend-8ccx.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let finalresult = await result.json();

    alert(`${finalresult.msg}`);
  };
  return (
    <>
      <h1>Registration Form</h1>

      <form onSubmit={submitdetails}>
        <div>
          <label>username</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <div>
          <label>email</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>password</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Register;
