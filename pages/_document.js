import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="/fonts/FredokaOne-Regular.ttf" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
