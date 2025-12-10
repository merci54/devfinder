import { create } from "zustand";
import type { User } from "./user";
import { persist } from "zustand/middleware";

type UserStore = {
  user: User | null;
  error: string | null;
  setUser: (newUser: User | null) => void;
  setError: (msg: string | null) => void;
};

const defaultValues: User = {
  login: "octocat",
  id: 1,
  avatar_url: "/icons/user-img.png",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  name: "The Octocat",
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
      error: null,
      setUser: (newUser) => set({ user: newUser, error: null }),
      setError: (msg) => set({ error: msg }),
    }),
    { name: "user-storage" }
  )
);
