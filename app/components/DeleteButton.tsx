import React from "react";
import { deleteUser, removeUser } from "../utils/actions";

const DeleteButton = ({ id }: { id: string }) => {
  const removeUserWithID = removeUser.bind(null, id);
  return (
    <form action={removeUserWithID}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
