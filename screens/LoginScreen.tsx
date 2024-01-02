import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '100%',
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
  };
};

export default LoginScreen;
