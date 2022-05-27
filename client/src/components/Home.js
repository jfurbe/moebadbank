import React from 'react';
import {Card} from 'react-bootstrap';
import bank from '../resources/bank.png';
import {Link} from 'react-router-dom';

function Home(){

  return (
    <Card className="cards" >
      <Card.Body>
        
        <Card.Img variant="top" src={bank}/>
        
        <Card.Text>
          Welcome to the BadBank App. Please do your best to do bad things.
        </Card.Text>
        <Card.Text className="text-center"> Create an <Link to="/createaccount">Account</Link>.  
         Or Login to the right.</Card.Text>

      </Card.Body>
    </Card>
  );
}

export default Home;