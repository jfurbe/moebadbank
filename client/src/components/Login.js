import React, {useState, useContext, useEffect} from 'react';
import {Accordion} from 'react-bootstrap'
import {UserContext} from './context';
import {useNavigate} from 'react-router-dom';
import LoginForm from './LoginForm';

function Login(){
  const [cntx, setCntx] = useContext(UserContext);
  const [key, setKey] = useState('');
  const [completetion, setComplete] = useState(false);
  const [logOrCreate, setLogOrCreate] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  let nav = useNavigate();

  function checkDataBase(user, email, password){

    if(!user.includes('@')){
      fetch(`/account/create/${user}/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
          try { //Success
              const data = JSON.parse(text);
              success(data)
              console.log('JSON:', data);
          } catch(err) { //Error
              setErrMsg(text);
              setComplete(true);
              console.log('err:', text);
          }
      });
    } else {
    
     // let email = user;   
      console.log(user, email)
      fetch(`/account/login/${user}/${email}`)
      .then(response => response.text())
      .then(text => {
          try { //Success
              const data = JSON.parse(text);
              success(data);
              console.log('JSON:', data);
          } catch(err) { //Error
              setErrMsg(text);
              setComplete(true);
              console.log('err:', text);
          }
      });
    }

    function success(data) {
      setCntx((old)=>({...old, loggedIn: true, user: data} ))
      setKey('2');
      setComplete(true);
    } 
   completetionMsg();
  }
  
  function completetionMsg() {
    
    setTimeout(()=>setComplete(false), 5000);
  }

  function logout(){
    console.log(cntx);
    setCntx((old)=> ({...old, loggedIn: false}));
    nav("/", {replace:true});
  }


  useEffect(()=> {
    cntx.page == '/createAccount' ?
                            setLogOrCreate(false) :
                            setLogOrCreate(true);
                            setTimeout(()=> setKey('0'), 1750);
  },[cntx.page])

  return (
    <div className="login">
       <Accordion activeKey={key}>
       {!cntx.loggedIn &&
        <Accordion.Item eventKey="0" onClick={()=>setKey('0')}>
          <Accordion.Header>{logOrCreate ? 'Login' : 'Create Account'}</Accordion.Header>
          <Accordion.Body>
          {completetion && <><h3 style={{color:'red'}}>Login Failed</h3>
          <h6>{errMsg}</h6></>} 
            <LoginForm checkDataBase={checkDataBase} login={logOrCreate}/>
          </Accordion.Body>
        </Accordion.Item>
      }
        {cntx.loggedIn &&
        <>
        <Accordion.Item eventKey="1" onClick={logout}>
        <Accordion.Header>LogOut</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
        
        <Accordion.Item id="balance" eventKey="2">
          <Accordion.Header>Your Balance</Accordion.Header>
          <Accordion.Body>
          {completetion && <h3 style={{color:'green'}}>Login Success</h3>}  
          <h5>Welcome {cntx.user.name}</h5>
          <p>Your Current Balance is:</p>
          <h2>{cntx.user.balance}</h2>
          </Accordion.Body>
        </Accordion.Item>
        </>}
</Accordion>
    </div>
  )
}

export default Login;