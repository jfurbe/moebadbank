import React from 'react';
import {Form, Button} from 'react-bootstrap';

function LoginForm({checkDataBase, login}){
   
  function handleLogin(e, goog=null){
    e.preventDefault();
    console.log(e, goog)
    checkDataBase(e.target[0].value, e.target[1].value, e.target[2].value);
  }

  return (
  <Form onSubmit={(e)=> handleLogin(e)}>
  {!login &&
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>
  }
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
  <div className="pt-2">
  <Button variant="secondary" onClick={(e, goog='goog')=> handleLogin(e, goog)}>
    Sign in with Google
  </Button>
  </div>
</Form>
)};

export default LoginForm;