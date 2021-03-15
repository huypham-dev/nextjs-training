import Layout from "components/common/Layout";
import "styles/globals.css";
import { AppProps } from "next/app";
import Error from "next/error";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { error } = pageProps || {};

  return (
    <Layout>
      {error && error.errorCode ? (
        <Error statusCode={error.errorCode} title={error.message} />
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}

export default MyApp;
