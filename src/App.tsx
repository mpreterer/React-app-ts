import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "./component/Card";
import EventsExample from "./component/EventsExample";
import List from "./component/List";
import Todoitem from "./component/Todoitem";
import UserItem from "./component/UserItem";
import UserList from "./component/UserList";
import { ITodo, IUser } from "./types/types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
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

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <EventsExample />
      <Card
        onClick={(num) => console.log(num)}
        width="200px"
        height="200px"
      ></Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      ></List>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <Todoitem todo={todo} key={todo.id} />}
      ></List>
    </div>
  );
}

export default App;
