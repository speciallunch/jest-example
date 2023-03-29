import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import UserList from "./component/UserList";
import TodoList from "./component/TodoList";
import JoinButton from "./component/JoinButton";

export interface IUser {
  name?: string | undefined;
  age?: number | undefined;
}

export interface IUsers extends Array<IUser> {}

function App() {
  let users: IUsers = [{ name: "kim" }, { name: "lee" }, { name: "park" }];
  return (
    <div className="App">
      <h1>로그인 창</h1>
      <div data-testid="my-div" />
      <Header />
      <UserList users={users} delay={900} />
      <TodoList />
      <JoinButton age={30} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
