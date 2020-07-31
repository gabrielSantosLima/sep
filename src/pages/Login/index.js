import React, { useState } from 'react';

import { Button } from './styles';

const Login = () => {
  let [ cont, setCont ] = useState(0);

  function a(){
    setCont(cont + 1);
    console.log(cont);
  }

  return (
    <>
      <p>Número: {cont}</p>
      <Button onClick={a}>Hello</Button>
      <h1>Hello</h1>
    </>
  );
}

export default Login;