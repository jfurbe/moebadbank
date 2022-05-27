import React, {useState, useContext, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import bank from '../resources/bank.png';
import {UserContext} from './context';
import ProcessForm from './ProcessForm';

function Withdraw(){
  const [cntx, setCntx] = useContext(UserContext);
  const [error, setError] = useState(false);

  function handleWithdraw(e) {
    e.preventDefault();
    console.log(e)
    let value = parseInt(e.target[0].value);
    if(value > 0) {
      value = cntx.user.balance - value;
      let userUpdate = {...cntx.user, balance: value}
      setCntx((old)=> ({...old, user: userUpdate}));
      cntx.updateDB(cntx.user.email, value);
    } else {
      setError(true);
      setTimeout(()=> setError(false), 1500)
    }
  }

  return (
      <Card className="cards"  style={{height:'70%'}}>
      <Card.Body>
        
        <Card.Img variant="top" src={bank} style={{left:'0%', opacity: '10%', position:'absolute'}}/>
        <h2>Withdraw</h2>
        {error && <h6 style={{color:'red'}}>Please Deposit correct amount</h6>}
        <ProcessForm type={'Withdraw'} handle={handleWithdraw}/>
      </Card.Body>
    </Card>
  )
};

export default Withdraw;