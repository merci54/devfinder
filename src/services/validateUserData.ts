import type { User } from "./user";

export function sanitizeUserData(user: User) {
  const result = {};

  for (const key in user) {
    const value = user[key];

    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "")
    ) {
      result[key] = "Not available";
    } else {
      result[key] = value;
    }
  }

  return result;
}
