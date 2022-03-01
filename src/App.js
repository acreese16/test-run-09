import './App.css';
import React, {useState, useEffect} from 'react';
import AlbumTitle from './AlbumTitle';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortControl = new AbortController();

    const loadUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users?userId=1", {signal: abortControl.signal});
      const userFromAPI = await response.json();
      setUsers(userFromAPI);
    };

    loadUsers();

    return () => {
      abortControl.abort();
    }
  }, []);


  return (
    <div className="App">
      {users.map((user, index) => (<AlbumTitle key={index} name={user.name} userId={user.id} email={user.email}/>))}
    </div>
  );
}

export default App;
