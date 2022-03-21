import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/nft.module.css";
import NFTsData from "../../data/nft-data.json";
import Image from "next/image";
import cls from "classnames";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params - ", params);
  return {
    props: {
      nft: NFTsData.find((nft) => {
        return nft.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = NFTsData.map((nft) => {
    return {
      params: {
        id: nft.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const NFT = (props) => {
  const router = useRouter();
  console.log("props NFT", props);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, websiteUrl, imgUrl, neighbourhood } = props.nft;

  const handleUpVoteButton = () => {
    console.log("handleUpVoteButton");
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back To Home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          ></Image>
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/icons/star.svg" width="24" height="24"></Image>
            <p className={styles.text}>{websiteUrl}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/icons/star.svg" width="24" height="24"></Image>
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/icons/star.svg" width="24" height="24"></Image>
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpVoteButton}>
            Up Vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFT;
