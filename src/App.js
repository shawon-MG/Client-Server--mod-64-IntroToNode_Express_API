import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const job = event.target.job.value;
    const user = { name, job };
    console.log(name, job)
    /*------ posting data to server---- */
    fetch('http://localhost:4000/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
      })
  };

  return (
    <div className="App">
      <h1> Using my own data.</h1>
      <p> <small> NODE, Express</small></p>
      <h2>Users: {users.length}</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Enter Name" required />
        <input type="text" name="job" placeholder="Job" required />
        <input type="submit" value="Add User" />
      </form>

      <ul>
        {
          users.map(user => <div key={user.id}>
            <li> <strong>ID : </strong> {user.id}</li>
            <li> <strong>Name :</strong> {user.name} </li>
            <li> <strong>Job : </strong> {user.job}</li>
            <br />

          </div>)
        }
      </ul>

    </div>
  );
}

export default App;
