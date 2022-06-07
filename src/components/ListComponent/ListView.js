import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function ListView(props) {
  const [data, setData] = useState({ });

//   const api = axios.create({
//     baseURL: 'https://swapi.py4e.com/api/'
// });

//     useEffect(() => {
//       const fetchData = async () => {
//       const response = await api.get('https://swapi.py4e.com/api/people');

//       // if you want to get the details as well

//       // details.data will be an array with details for all the pokemon that you get
//       // from response
//       const details = await Promise.all(response.data.results.map((film) => {
//             return axios.get(`https://swapi.py4e.com/api/people/${film.caracter}/${film.name}`)

//         }));
//       };    

//       fetchData();
//     }, []);

let caractersInfo = props.data;
let caracterInfo = props.data[props.caracter];
let caracterFilms = caractersInfo[props.caracter].films;

console.log("props.data[props.caracter]")
console.log(props.data[props.caracter])
console.log("props.data")
console.log(props.data)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://swapi.py4e.com/api/' + props.data.caracter + 'films',
      );
      const json = await res.json();
      setData(json.hits);
    };
    fetchData();
  },[setData]);

  // axios.all(caracterFilms.map((film) => axios.get(film)))
  // .then(
  //   (data) => console.log(data[1].data.title)
  // )
  
  Promise.all(caracterFilms).then(function(values) {
    console.log(values);
  });

    return (
        <>
        <h2>List of your movies</h2>
        <h3>User Since: 06 / 06 / 2022</h3>
    <table>
    <tr>
        <th>Titulo</th>
        <th>Director</th>
        <th>Opening_Crawl</th>
    </tr>
    <tr>
      
    <a href='/'><th>A new hope</th></a>
        <th>George Lucas</th>
        <th>It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....</th>
     
        
    </tr>
    <tr>
      

    <a href='dsds'><th>The Empire Strikes Back</th></a>
      <th>Irvin Kershner</th>
      <th>It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....</th>
   
      
  </tr>
  <tr>
      

  <a href='dsds'><th>Return of the Jedi</th></a>
      <th>Richard Marquand</th>
      <th>Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...</th>
     
      
  </tr>
  <tr>

  <a href='dsds'><th>Revenge of the Sith</th></a>
      <th>George Lucas</th>
      <th>War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....</th>
      
      
  </tr>
  <tr>
      

  <a href='dsds'><th>The Force Awakens</th></a>
      <th>J. J. Abrams</th>
      <th>Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....</th> 
      
  </tr>

    </table>
    </>
    
)}