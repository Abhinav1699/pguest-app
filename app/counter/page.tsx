"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newtask } from "../store/taskSlice";

const NewTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    dispatch(newtask({ id: Date.now().toString(), title, description }));
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <h1>Create New Task</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Create Task</button>
    </div>
  );
};

export default NewTask;
