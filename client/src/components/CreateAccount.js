import React, {useContext, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import bank from '../resources/bank.png';
import {UserContext} from './context';

function CreateAccount(){
  const [cntx, setCntx] = useContext(UserContext);

  useEffect(()=> {
    setCntx((old)=> ({...old, page:'/createAccount'}))

    return ()=> setCntx((old)=> ({...old, page:''}))
  }, []);

  return (
      <Card className="cards"  style={{height:'70%'}}>
      <Card.Body>
        
        <Card.Img variant="top" src={bank} style={{left:'0%', opacity: '10%', position:'absolute'}}/>
        
        <Card.Text >

        </Card.Text>

      </Card.Body>
    </Card>
  )
};

export default CreateAccount;