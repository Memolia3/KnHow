import styles from "./text.module.scss";

interface TextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: "main" | "sub";
}

const Text: React.FC<TextProps> = ({
  children,
  as: Component = "p",
  className = "",
  color = "main",
}) => {
  const colorClass =
    color === "main" ? styles["text-color--main"] : styles["text-color--sub"];

  return (
    <Component className={`${styles.text} ${colorClass} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default Text;
