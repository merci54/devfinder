import { useUserStore } from "../../services/userStore";
import Container from "../Container/Container";
import css from "./ContentBlock.module.scss";

export default function ContentBlock() {
  const user = useUserStore((state) => state.user);
  return (
    <section className={css.section}>
      <Container>
        <h2>{user.login}</h2>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.location}</h2>
      </Container>
    </section>
  );
}
