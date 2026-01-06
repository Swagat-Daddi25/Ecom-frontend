import React from "react";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let logindetails = async (e) => {
    e.preventDefault();

    // send the details to the backend
    let data = { email, password };
    let result = await fetch("https://ecombackend-8ccx.onrender.com/login", {
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
      <h1>login</h1>
      <form onSubmit={logindetails}>
        <div>
          <label>email</label>
          <br />
          <input type="text" onChange={(e) => setemail(e.target.value)} />
        </div>
        <div>
          <label>password</label>
          <br />
          <input type="text" onChange={(e) => setpassword(e.target.value)} />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
