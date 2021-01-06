const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <a href="/">Home</a>
      <a href="/about">About Page</a>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
