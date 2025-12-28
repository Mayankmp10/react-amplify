import React from 'react'
import NavbarComp from './components/NavbarComp'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Todos } from './components/Todos';

function App() {
    const onDelete = (todo) => {
      console.log("I am onDelete of todo", todo);
  }
  let todos = [
    {
      sno: 1,
      tittle: "Go to the market",
      desc: "You need to go to the market to buy stuff"
    },
    {
      sno: 2,
      tittle: "Go to the school",
      desc: "You need to go to the school to study"
    },
    {
      sno: 3,
      tittle: "Go to the store",
      desc: "You need to go to the store to buy items"
    },
    {
      sno: 4,
      tittle: "Go to the office",
      desc: "You need to go to the office to work"
    },
    {
      sno: 5,
      tittle: "Go to the vacation",
      desc: "You need to go to the vacations to relax"
    },
    {
      sno: 6,
      tittle: "Go to the beach",
      desc: "You need to go to the beach to enjoy"
    },
    {
      sno: 7,
      tittle: "Go to the mountains",
      desc: "You need to go to the market to wonder"
    },
  ]
  return (
    <>
    <h1>change done again</h1>
        <NavbarComp title="MY TODOS LIST"/>
        <Todos todos={todos} onDelete={onDelete}/>
    </>
  );
}

export default App;