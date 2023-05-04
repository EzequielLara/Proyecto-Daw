import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          {`
          @font-face {
              font-family: 'Fredoka One';
              src: url('/fonts/FredokaOne-Regular.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
        `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
