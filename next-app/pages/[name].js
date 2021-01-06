import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  return <div>Welcome {name}</div>;
};

export default Name;
