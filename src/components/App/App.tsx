import { useEffect } from "react";
import ContentBlock from "../ContentBlock/ContentBlock";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import css from "./App.module.scss";
import { useThemeStore } from "../../lib/stores/themeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  return (
    <>
      <Header />
      <main className={css.main}>
        <SearchForm />
        <ContentBlock />
      </main>
    </>
  );
}

export default App;
