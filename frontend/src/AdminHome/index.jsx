import React, { useState, useEffect } from "react";
// import callApi, { ErrorHappened } from "../utils/callApi";
import Login from "./login";

const AdminHome = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authKey = localStorage.getItem("auth-key");
    if (!authKey) return;
    authenticate(authKey);
  }, []);

  function authenticate(authKey) {
    setTimeout(() => {
      setAuthenticated(true);
      localStorage.setItem("auth-key", authKey);
    }, [1200]);
    // callApi(`auth?key=${authKey}`, "get", "admin验证").then((res) => {
    //   if (res === ErrorHappened) return;
    //   setAuthenticated(true);
    //   localStorage.setItem("auth-key", authKey);
    // });
  }

  if (!authenticated) {
    return (
      <Login
        onSubmit={(key) => {
          authenticate(key);
        }}
        password={localStorage.getItem("auth-key")}
      />
    );
  }

  return <div>This is Admin Home Page</div>;
};

export default AdminHome;
