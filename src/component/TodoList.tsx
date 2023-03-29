import { useEffect, useState } from "react";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodos extends Array<ITodo> {}

export default function TodoList() {
  const [todoList, setTodoList] = useState<ITodos>([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: ITodo[]) => {
        setTodoList(data.slice(0, 5));
      })
      .catch(() => setErrorMsg("에러"));
  }, []);

  return (
    <div>
      <h3>할일리스트</h3>
      <ul>
        {errorMsg !== "에러"
          ? todoList.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : undefined,
                }}
              >
                {todo.title}
              </li>
            ))
          : errorMsg}
      </ul>
    </div>
  );
}
