import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

const USER_API = "http://user_app:5000";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USER_API)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users App</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
