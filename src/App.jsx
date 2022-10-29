import { useEffect, useState } from "react";
import "./App.css";
export const server = import.meta.env.VITE_SERVER;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${server}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const handleUserSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
  };

  return (
    <div className="App">
      <div className="container mx-auto p-4 grid gap-8 justify-center">
        <div className="flex flex-col gap-4">
          <form onSubmit={handleUserSubmit} className="flex flex-col gap-4">
            <div className="">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="border"
              />
            </div>
            <div className="">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border"
              />
            </div>
            <div className="">
              <button type="submit" className="border">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2>Total users: {users.length}</h2>
          <div className="flex flex-col gap-4">
            {users.map(user => (
              <div key={user.id}>
                <h3 className="">{user.name}</h3>
                <p className="">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
