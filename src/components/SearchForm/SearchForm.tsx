import { useState } from "react";
import Container from "../Container/Container";
import css from "./SearchForm.module.scss";
import { getUser } from "../../services/searcherApi";
import { useUserStore } from "../../services/userStore";

export default function SearchForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();
  const searchUser = async (formData: FormData) => {
    try {
      setIsLoading(true);
      await new Promise((e) => setTimeout(e, 2000));
      const username = formData.get("username");
      if (typeof username === "string" && username.length >= 3) {
        const data = await getUser(username);
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={css.searchForm}>
      <Container>
        <div className={css.wrapper}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchUser(new FormData(e.currentTarget));
            }}
          >
            <input
              name="username"
              className={css.input}
              placeholder="Search GitHub username…"
              type="text"
            />
            <button className={css.submitBtn} type="submit">
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>

          <img className={css.icon} src="/icons/search.svg" alt="search icon" />
        </div>
      </Container>
    </div>
  );
}
