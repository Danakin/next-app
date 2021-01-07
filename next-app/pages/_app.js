import styled from "styled-components";
import { Normalize } from "styled-normalize";
import CartProvider from "../context/Cart";

import Navbar from "../components/Navbar";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap");
  background: linear-gradient(to right, #3a6073, #3a7bd5);
  font-family: "Padauk", sans-serif;
  color: #444;
  min-height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Container>
        <Normalize />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    </CartProvider>
  );
};

export default MyApp;
