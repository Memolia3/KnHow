import styles from "./img.module.scss";

interface ImgProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large" | "full";
}

const Image: React.FC<ImgProps> = ({ src, size = "medium", alt = "画像" }) => {
  return <img src={src} alt={alt} className={`${styles.image} ${size}`} />;
};

export default Image;
