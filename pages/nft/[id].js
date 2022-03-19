import Link from "next/link";
import { useRouter } from "next/router";

const NFT = () => {
  const router = useRouter();
  return (
    <div>
      NFT {router.query.id}
      <Link href="/">
        <a>Back To Home</a>
      </Link>
    </div>
  );
};

export default NFT;
