"use client";
import React from "react";
import { createUser } from "../utils/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useActionState } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

function Forms() {
  const [message, formState] = useActionState(createUser, null);
  return (
    <form action={formState} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="capitalize text-2xl mb-4">create user</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        defaultValue="Abhinav"
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        defaultValue="Dixit"
        required
      />
      <SubmitButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-grey=700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded capitalize";

export default Forms;
