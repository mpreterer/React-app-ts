interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

interface IUser {
  name: string;
  email: string;
  id: number;
  address: IAddress;
}

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export type { IUser, IAddress, ITodo };
