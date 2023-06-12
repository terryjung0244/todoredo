import React, { useState } from "react";
import "./CreateTodo.css";
import { TodoType } from "service/model/todo";
import { useDispatch } from "react-redux";
import { createTodoAction } from "service/redux/action/todoAction";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState<TodoType>({
    title: "",
    desc: "",
  });

  const createInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo({ ...inputTodo, [e.target.name]: e.target.value });
  };

  const createTodoButton = () => {
    const { title, desc } = inputTodo;
    // Validation
    if (!title || !desc) {
      alert("Create Your Todo List");
    }

    dispatch(createTodoAction({ ...inputTodo, title, desc }));
  };

  return (
    <div>
      <input
        name={"title"}
        value={inputTodo.title}
        placeholder="Title"
        onChange={createInputTodo}
      />
      <input
        name={"desc"}
        value={inputTodo.desc}
        placeholder="Description"
        onChange={createInputTodo}
      />
      <button onClick={createTodoButton}>Submit</button>
    </div>
  );
};

export default CreateTodo;
