import { useRouter } from "next/router";

const NFT = () => {
  const router = useRouter();
  return <div>NFT {router.query.id}</div>;
};

export default NFT;
