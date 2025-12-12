import type { User } from "./types/user";

export function validateUser(user: User): User {
  const result = { ...user };

  for (const key in result) {
    if (result[key as keyof User] === null) {
      (result as Record<keyof User, string | number | null>)[
        key as keyof User
      ] = "Not available";
    }
  }

  return result;
}
