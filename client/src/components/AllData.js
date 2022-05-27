import React, {useState, useEffect} from 'react';
import {Table, Card} from 'react-bootstrap';
import bank from '../resources/bank.png';

function AllData() {
  const [data, setData] = useState('');

  useEffect(()=> {
    // fetch all accounts 
    fetch('./account/all')
      .then(response => response.json())
      .then((data)=> {
        console.log(data);
        setData(data);
      });

  }, []);


  return(
    <>
      <Card className="cards"  style={{height:'70%'}}>
        <Card.Body>
        <Card.Img variant="top" src={bank} style={{left:'0%', opacity: '10%', position:'absolute'}}/>
        <Ttable data={data}/>
        </Card.Body>
      </Card>
      
    </>
  )
}

function Ttable({data}){
  return(
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          {data != '' && Object.keys(data[0]).filter(x=>x!='_id').map((key)=> (<th>{key}</th>))}
        </tr>
      </thead>
      <tbody>
      {data != '' && data.map((x,i)=> (
        <tr>
          <td>{i}</td>
          <td>{x.name}</td>
          <td>{x.email}</td>
          <td>{x.password}</td>
          <td>{x.balance}</td>
        </tr>
        ))}
      </tbody>
      </Table>
  )
}
export default AllData;