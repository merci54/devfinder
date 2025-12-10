import Container from "../Container/Container";
import css from "./ContentBlock.module.scss";

export default function ContentBlock() {
  // const user = useUserStore((state) => state.user);
  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.imgBlock}>
            <img
              className={css.img}
              src="/icons/user-img.png"
              alt="user image"
            />
          </div>
          <div className={css.header}>
            <h1 className={css.header__title}>The Octocat</h1>
            <p className={css.header__date}>Joined 25 Jan 2011</p>
            <p className={css.header__username}>@octocat</p>
          </div>
          <p className={css.bio}>This profile has no bio</p>
          <div className={css.stats}>
            <ul className={css.stats__list}>
              <li className={css.stats__item}>
                <span className={css.key}>Repos</span>
                <h2 className={css.value}>8</h2>
              </li>
              <li className={css.stats__item}>
                <span className={css.key}>Followers</span>
                <h2 className={css.value}>3938</h2>
              </li>
              <li className={css.stats__item}>
                <span className={css.key}>Following</span>
                <h2 className={css.value}>9</h2>
              </li>
            </ul>
          </div>
          <ul className={css.linksList}>
            <li className={css.linksList__item}>
              <img src="/icons/pin.svg" alt="pin icon" />
              <span className={css.linksList__value}>San Francisco</span>
            </li>
            <li className={css.linksList__item}>
              <img src="/icons/twitter.svg" alt="twitter icon" />
              <span className={css.linksList__value}>Not Available</span>
            </li>
            <li className={css.linksList__item}>
              <img src="/icons/url.svg" alt="url icon" />
              <a className={css.linksList__value}>https://github.blog</a>
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
      </Container>
    </section>
  );
}
