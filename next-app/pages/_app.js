import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Component {...pageProps} />
      <footer>Danny Festor was here</footer>
    </>
  );
};

export default MyApp;
