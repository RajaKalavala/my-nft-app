import Link from "next/link";
import { useRouter } from "next/router";

import NFTsData from "../../data/nft-data.json";

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

  const { name, websiteUrl } = props.nft;

  return (
    <div>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <p>{name}</p>
      <p>{websiteUrl}</p>
    </div>
  );
};

export default NFT;
