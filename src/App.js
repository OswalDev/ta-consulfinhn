import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import ListView from './components/ListComponent/ListView';
import './index.css';

function App() {
  const [user, setUser] = useState({ name: ""});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ results: [] });


//axios data fetch
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      // Requesting data to api with axios
      'https://swapi.py4e.com/api/people/',
    );
    // console.log(result.data.results);
    setData(result.data.results);
  };

  fetchData();
}, []);

  //Manual test
  const users={    
    name: "Luke Skywalker" ,
    password: "luke123"}

  var caracter;
  const [people, setPeople] = useState('');



  //Login function
  const Login = details => {
   
    // console.log(details); //data of user from login form 

      //testing

    

        if (details.name === users.name && details.password === '') {
          console.log("User Logged In");

          if( users.name === "Luke Skywalker") caracter = 0;
          if( users.name === "C-3PO") caracter = 1;
          if( users.name === "R2-D2") caracter = 2;
          if( users.name === "Darth Vader") caracter = 3;
          if( users.name === "Leia Organa") caracter = 4;

          console.log(caracter) //caracter id

          console.log(data[caracter])
          
          
          setUser({
            name: details.name
          })
          // console.log(data.hits[1]);
          
        }else{
          console.log("Credentials do not match!"); //not necessary
          setError("Credentials do not match!");
        }
      


  }


  //Logout function
  const Logout = () => {
    console.log("User Logged Out");
    setUser({name: ""})
  }

  

  return (
    <div className="App">
      {(user.name !== "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </div>
  );
}

export default App;
