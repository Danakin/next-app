import { useEffect } from "react";
import Page from "../components/styled/Page";
import useCart from "../hooks/useCart";

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Page>
      <h2>Payment Successfull</h2>
      <p>Thanks for your purchase!</p>
    </Page>
  );
};

export default Success;
