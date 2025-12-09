import Container from "../Container/Container";
import Header from "../Header/Header";
import css from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Container>
          <h2>Main</h2>
        </Container>
      </main>
    </>
  );
}

export default App;
