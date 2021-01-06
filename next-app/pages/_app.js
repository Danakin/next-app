const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <a href="/">Home</a>
      <a href="/about">About Page</a>
      <Component {...pageProps} />
      <footer>Danny Festor was here</footer>
    </>
  );
};

export default MyApp;
