import Container from "../Container/Container";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <h2 className={css.title}>devfinder</h2>
        <div className={css.themeSwitch}>
          <span className={`text-preset-8 ${css.theme}`}>LIGHT</span>
          <img className={css.icon} src="/icons/sun.svg" alt="sun icon" />
        </div>
      </Container>
    </header>
  );
}
