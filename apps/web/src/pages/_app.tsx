import type { AppProps } from "next/app";

function Web({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Web;
