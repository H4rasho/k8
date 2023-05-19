import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

const ZOO_API = "/zoo/animals";
const USER_API = "/user";

function App() {
  const [animals, setAnimals] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(ZOO_API)
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    fetch(USER_API)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h2>Animals App</h2>
      <div>
        {animals.map((animal) => (
          <div key={animal.id}>
            <h3>{animal.name}</h3>
          </div>
        ))}
      </div>
      <h2>Users</h2>
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
