import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './components/navbar';
import MyCard from './components/MyCard';
import  {getMatches } from './api/Api';
import React ,{ useEffect } from 'react';

function App() {


  useEffect(()=>{
    getMatches().then((data)=>console.log("DATA",data))
    .catch(error=>alert("could not  load data"))
  },[])
  return (
    <div className="App">
      <Navbar/>
      <h1>Welcome to my live score APP</h1>
      <MyCard/>
  

    </div>
  );
}

export default App;
