import React from "react";
import Card from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./types/types";

function App() {
  const users: IUser[] = [{ "id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "city": "Gwenborough", "zipcode": "92998-3874"}}]
  return (
    <div>
      <Card onClick={(num) => console.log(num)} width="200px" height="200px">
      </Card>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
