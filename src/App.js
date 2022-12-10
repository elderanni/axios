// src/App.jsx
// src/App.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, __deleteTodos } from "./redux/modules/todosSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  function deleteHandler(id) {
    dispatch(__deleteTodos(id));
  
  }
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button
            onClick={() => {
              deleteHandler(todo.id);
            }}
          >
            삭제하기
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
