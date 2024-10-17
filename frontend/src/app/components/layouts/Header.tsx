import Image from "../elements/img/Img";
import Text from "../elements/text/Text";
import styles from "./header.module.scss";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "タイトル" }) => {
  return (
    <header className={styles.header}>
      <div className={styles["logo-container"]}>
        <Image
          src="/images/knhow-panda-icon.png"
          alt="カンホーパンダのアイコン"
          size="icon"
        />
        <Text as="h2">KnHow</Text>
      </div>
      <div className={styles["center-text"]}>
        <Text as="h1">{title}</Text>
      </div>
      <div className={styles["right-container"]}></div>
    </header>
  );
};

export default Header;
