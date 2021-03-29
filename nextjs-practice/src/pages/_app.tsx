import "../../wdyr";
import "styles/globals.css";
import { AppProps } from "next/app";
import Error from "next/error";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { error } = pageProps || {};

  return error && error.errorCode ? (
    <Error statusCode={error.errorCode} title={error.message} />
  ) : (
    <Component {...pageProps} />
  );
};

export default App;
