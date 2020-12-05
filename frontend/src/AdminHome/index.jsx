import React, { useState, useEffect } from "react";
import callApi, { ErrorHappened } from "../utils/callApi";
import Login from "./login";
import Posts from "./posts";

const AdminHome = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authKey = localStorage.getItem("auth-key");
    if (!authKey) return;
    authenticate(authKey);
  }, []);

  function authenticate(authKey) {
    callApi(`auth`, "post", { key: authKey }, "密码错误").then((res) => {
      if (res === ErrorHappened) return;
      setAuthenticated(true);
      localStorage.setItem("auth-key", authKey);
    });
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

  return <Posts />;
};

export default AdminHome;
