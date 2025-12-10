import css from "./ResultsMessage.module.scss";

export default function ResultsMessage() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>No results found!</h2>
      <p className={css.text}>
        We couldn’t find any GitHub users matching your search. Please
        double-check the username and try again.
      </p>
    </div>
  );
}
