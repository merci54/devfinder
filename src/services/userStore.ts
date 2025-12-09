import { create } from "zustand";
import type { User } from "./user";
import { persist } from "zustand/middleware";

type UserStore = {
  user: User;
  setUser: (newUser: User) => void;
};

const defaultValues: User = {
  login: "octocat",
  id: 1,
  avatar_url: "https://github.com/images/error/octocat_happy.gif",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  name: "monalisa octocat",
  company: "GitHub",
  location: "San Francisco",
  email: "octocat@github.com",
  bio: "There once was...",
  twitter_username: "monatheoctocat",
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: "2008-01-14T04:33:35Z",
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: defaultValues,
      setUser: (newUser) => set({ user: newUser }),
    }),
    { name: "user-storage" }
  )
);
