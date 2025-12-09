import Container from "../Container/Container";
import css from "./Header.module.scss";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <h2 className={css.title}>devfinder</h2>
        <button className={css.themeSwitch}>
          <span className={css.theme}>LIGHT</span>
          <img className={css.icon} src="/icons/sun.svg" alt="sun icon" />
        </button>
      </Container>
    </header>
  );
}
