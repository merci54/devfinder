import Container from "../Container/Container";
import css from "./SearchForm.module.scss";
import { getUser } from "../../lib/api/searcherApi";
import { useUserStore } from "../../lib/stores/userStore";
import type { AxiosError } from "axios";

export default function SearchForm() {
  const { setUser } = useUserStore();
  const error = useUserStore((state) => state.error);
  const setError = useUserStore((state) => state.setError);
  const searchUser = async (formData: FormData) => {
    try {
      const username = formData.get("username") as string;
      if (username && username.length >= 1) {
        const data = await getUser(username.trim());
        setUser(data);
      }
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 404) {
        setError("No results");
      }
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
              Search
            </button>
          </form>

          <img className={css.icon} src="/icons/search.svg" alt="search icon" />
          {error && <span className={css.error}>{error}</span>}
        </div>
      </Container>
    </div>
  );
}
