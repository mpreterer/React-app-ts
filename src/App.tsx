import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./types/types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card
        onClick={(num) => console.log(num)}
        width="200px"
        height="200px"
      ></Card>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
