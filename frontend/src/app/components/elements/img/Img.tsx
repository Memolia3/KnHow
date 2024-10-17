import styles from "./img.module.scss";

interface ImgProps {
  src: string;
  alt?: string;
  size?: "icon" | "small" | "medium" | "large" | "full";
  className?: string;
}

const Image: React.FC<ImgProps> = ({
  src,
  alt = "画像",
  size = "medium",
  className = "",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.image} ${styles[size]} ${className}`}
      {...props}
    />
  );
};

export default Image;
