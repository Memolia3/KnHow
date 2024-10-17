import Text from "../elements/text/Text";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.spacer} />
      <Text as="h1">KnHow</Text>
      <div className={styles.spacer} />
    </header>
  );
};

export default Header;
