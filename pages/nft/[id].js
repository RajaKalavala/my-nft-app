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
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: false,
  };
}

const NFT = (props) => {
  const router = useRouter();
  console.log("props NFT", props);
  return (
    <div>
      NFT {router.query.id}
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <p>{props.nft.name}</p>
    </div>
  );
};

export default NFT;
