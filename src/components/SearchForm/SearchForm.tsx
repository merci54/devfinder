import Container from "../Container/Container";
import css from "./SearchForm.module.scss";

export default function SearchForm() {
  return (
    <div className={css.searchForm}>
      <Container>
        <div className={css.wrapper}>
          <input
            className={css.input}
            placeholder="Search GitHub username…"
            type="text"
          />
          <button className={css.submitBtn}>Search</button>
          <img className={css.icon} src="/icons/search.svg" alt="search icon" />
        </div>
      </Container>
    </div>
  );
}
