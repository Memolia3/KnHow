import styles from "./text.module.scss";

interface TextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  color?: "main-color" | "sub-color";
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  as: Component = "p",
  color = "main-color",
  className = "",
  ...props
}) => {
  return (
    <Component
      className={`${styles.text} ${styles[color]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
