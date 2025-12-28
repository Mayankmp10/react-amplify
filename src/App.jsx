import React, { use, useEffect, useState } from 'react'
import './App.css';
const ROOT_URL = 'https://kc8fdp333m.execute-api.us-east-1.amazonaws.com/dev';

function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState("");
  useEffect(() => {
    fetch(`${ROOT_URL}/todos`)
      .then(response => response.json())
      .then(json => setData(json.body));
  }, []);
  useEffect(() => {
    fetch(`${ROOT_URL}/users`)
      .then(response => response.json())
      .then(json => setUsers(json.body));
  }, []);
  return (
    <>
        <h1>GETTING DATA FROM API CALL</h1>
        {data.map(item => (
          <div className='todo-item' key={item.id}>
            <h3 className='todo-title'>{item.title}</h3>
            <p className='todo-para'>Completed: {item.completed ? 'Yes' : 'No'}</p>
          </div>
        ))}
        <hr />
        <br />
        {users && <h2>Users: {users}</h2>}
    </>
  );
}

export default App;