import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Non Fungible Tokens</span>
        <span className={styles.title2}>App</span>
      </h1>
      <p className={styles.subTitle}>Discover and Create new NFTs</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
