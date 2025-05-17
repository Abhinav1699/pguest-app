"use server";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formdata: FormData) => {
  "use server";
  console.log("prevState ===> ", prevState);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const firstName = formdata.get("firstName") as string;
  const lastName = formdata.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "User Created SuccessFully ....";
  } catch (error) {
    console.error(error);
    return "Failed to create User ....";
  }
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await fs.writeFile("users.json", JSON.stringify(users));
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await fs.readFile("users.json", "utf8");
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const users = await fetchUsers();
  const newArray = users.filter((user) => user.id !== id);
  await fs.writeFile("users.json", JSON.stringify(newArray));
  revalidatePath("/actions");
};
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("id") as string;
  const users = await fetchUsers();
  const newArray = users.filter((user) => user.id !== id);
  await fs.writeFile("users.json", JSON.stringify(newArray));
  revalidatePath("/actions");
  return "";
};
