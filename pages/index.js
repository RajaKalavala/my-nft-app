import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card/card";
import styles from "../styles/Home.module.css";
import NFTsData from "../data/nft-data.json";

export async function getStaticProps(context) {
  return {
    props: {
      NFTs: NFTsData,
    },
  };
}

export default function Home(props) {
  console.log("props:", props);
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

        {props.NFTs.length > 0 && (
          <div>
            <h2 className={styles.heading2}>NFTs</h2>

            <div className={styles.cardLayout}>
              {props.NFTs.map((nft) => {
                return (
                  <Card
                    key={nft.id}
                    name={nft.name}
                    imgUrl={nft.imgUrl}
                    href={`/nft/${nft.id}`}
                    className={styles.card}
                  ></Card>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
