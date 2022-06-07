import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import ListView from './components/ListComponent/ListView';
import './index.css';
import video from '../src/assets/swbackground.mp4';

function App() {
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");
  const [caracter, setCaracter] = useState("");
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
    password: "lukeskywalker1234"}

  const [people, setPeople] = useState('');



  //Login function
  const Login = details => {
   
    // console.log(details); //data of user from login form 

      //testing

    

        if (details.name === users.name && details.password === users.password) {
          console.log("User Logged In");

          if( users.name === "Luke Skywalker") setCaracter(0);
          if( users.name === "C-3PO") setCaracter(1);
          if( users.name === "R2-D2")  setCaracter(2);
          if( users.name === "Darth Vader")  setCaracter(3);
          if( users.name === "Leia Organa") setCaracter(4);

          console.log(caracter) //caracter id

          
          
          setUser({
            name: details.name,
            caracter: caracter
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

  //TESTING PROPS DATA
  //{props.data[props.caracter].name}

  

  return (
    <div className="App">

      {(user.name !== "") ? (
        <>
        <div class="sidebar">
          <a href="/">Logout</a>
        </div>
        <Header></Header>
        <div className='welcome'>
          <h1>Welcome, <span>{user.name}</span></h1>
          
        </div>
        <ListView data={data} caracter={caracter} ></ListView>
        </>
      ) : (
        <>
        <video className='videoTag' autoPlay loop muted>
        <source src={video} type='video/mp4' />
        </video>
          <LoginForm Login={Login} error={error} />
        </>
      )}

    </div>
  );
}

export default App;
