import { useUserStore } from "../../services/userStore";
import Container from "../Container/Container";
import ResultsMessage from "../ResultsMessage/ResultsMessage";
import css from "./ContentBlock.module.scss";

export default function ContentBlock() {
  const user = useUserStore((state) => state.user);
  const error = useUserStore((state) => state.error);
  return (
    <section className={css.section}>
      <Container>
        {user && error === null ? (
          <div className={css.wrapper}>
            <div className={css.imgBlock}>
              <img className={css.img} src={user.avatar_url} alt="user image" />
            </div>
            <div className={css.header}>
              <h1 className={css.header__title}>{user.name}</h1>
              <p className={css.header__date}>Joined 25 Jan 2011</p>
              <p className={css.header__username}>@{user.login}</p>
            </div>
            <p className={css.bio}>{user.bio}</p>
            <div className={css.stats}>
              <ul className={css.stats__list}>
                <li className={css.stats__item}>
                  <span className={css.key}>Repos</span>
                  <h2 className={css.value}>{user.public_repos}</h2>
                </li>
                <li className={css.stats__item}>
                  <span className={css.key}>Followers</span>
                  <h2 className={css.value}>{user.followers}</h2>
                </li>
                <li className={css.stats__item}>
                  <span className={css.key}>Following</span>
                  <h2 className={css.value}>{user.following}</h2>
                </li>
              </ul>
            </div>
            <ul className={css.linksList}>
              <li className={css.linksList__item}>
                <img src="/icons/pin.svg" alt="pin icon" />
                <span className={css.linksList__value}>{user.location}</span>
              </li>
              <li className={css.linksList__item}>
                <img src="/icons/twitter.svg" alt="twitter icon" />
                <span
                  className={`${css.linksList__value} ${css.linksList__link}`}
                >
                  Not Available
                </span>
              </li>
              <li className={css.linksList__item}>
                <img src="/icons/url.svg" alt="url icon" />
                <a
                  href={user.html_url}
                  target="_blank"
                  className={`${css.linksList__value} ${css.linksList__link}`}
                >
                  {user.html_url}
                </a>
              </li>
              <li className={css.linksList__item}>
                <img
                  src="/icons/office-building.svg"
                  alt="office building icon"
                />
                <span className={css.linksList__value}>@github</span>
              </li>
            </ul>
          </div>
        ) : (
          <ResultsMessage />
        )}
      </Container>
    </section>
  );
}
