import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';


import './index.css';
import App from './components/App';
import {UserContext} from './components/context';


function updateUserDB(user, amount){
  fetch(`/account/update/${user}/${amount}/`)
      .then(response => response.text())
      .then(text => {
          try { //Success
              console.log('JSON:', JSON.parse(text));
          } catch(err) { //Error
              console.log('err:', text);
          }
      });
}

function Index(){
  const [cntx, setCntx] = useState({loggedIn:false,
                                    user: 'jjadmin',
                                    page: 'home',
                                    updateDB: updateUserDB,
                                    });
  
  return (
    <React.StrictMode>
    <BrowserRouter>
      <UserContext.Provider value={[cntx, setCntx]}>
        <App />
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

