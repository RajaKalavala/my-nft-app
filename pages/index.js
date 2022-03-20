import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerButtonClick = () => {
    console.log("Banner Button Click");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="Mint NFT"
          handleOnClick={handleOnBannerButtonClick}
        ></Banner>

        <div className={styles.heroImage}>
          <Image src="/static/nft-image1.png" width={700} height={400}></Image>
        </div>
      </main>
    </div>
  );
}
