import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>NFT </span>
        <span className={styles.title2}>App</span>
      </h1>
      <p className={styles.subTitle}>Discover and Create new NFTs</p>
      <button className={styles.button}>Mint NFT</button>
    </div>
  );
};

export default Banner;
