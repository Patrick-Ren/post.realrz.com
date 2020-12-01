import React, { useState } from "react";
import { InputLabel, Input, Button, CircularProgress } from "@material-ui/core";

const Login = ({ onSubmit, password }) => {
  const [text, setText] = useState(password || "");

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <InputLabel>Password:</InputLabel>
        <Input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="password"
        />
      </div>
      {password ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onSubmit(text);
          }}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default Login;
