import React, { useState } from "react";
import "./CreateTodo.css";
import { TodoType } from "service/model/todo";

const CreateTodo = () => {
  const [inputTodo, setInputTodo] = useState<TodoType>({
    title: "",
    desc: "",
  });

  const createInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo({ ...inputTodo, [e.target.name]: e.target.value });
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
    </div>
  );
};

export default CreateTodo;
