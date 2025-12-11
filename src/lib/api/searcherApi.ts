import axios from "axios";
import type { User } from "../types/user";

export const getUser = async (username: string): Promise<User> => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
