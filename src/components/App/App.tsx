import ContentBlock from "../ContentBlock/ContentBlock";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import css from "./App.module.scss";

function App() {
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
