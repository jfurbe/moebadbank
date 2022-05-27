import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ProcessForm({type, handle}) {

  return (
    <Form onSubmit={(e)=> handle(e)}>

  <Form.Group className="mb-3" controlId="formBasicName">
    <br/>
    <Form.Control type="number" placeholder={`Enter ${type} Amount`} />
  </Form.Group>

  <Button variant="primary" type="submit">
    {`${type}`}
  </Button>
</Form>
  )
}

export default ProcessForm;