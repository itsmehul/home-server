import Head from "next/head";

const PwaHeaders = () => {
  return (
    <Head>
      <title>Epic Gains</title>
      <meta name="description" content="Best workout tracker app" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="application-name" content="Epic Gains" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0E1920" />
      <meta name="apple-mobile-web-app-title" content="Epic Gains" />
      <meta name="description" content="Best workout tracker app" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#0E1920" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#0E1920" />
      <meta name="apple-mobile-web-app-title" content="Epic Gains" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <link rel="apple-touch-icon" href="/ios/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/ios/192.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/touch-icon-iphone-retina.png"
      />
      <link rel="apple-touch-icon" sizes="167x167" href="/ios/192.png" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icon-192x192.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#0E1920"
      />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://yourdomain.com" />
      <meta name="twitter:title" content="Epic Gains" />
      <meta name="twitter:description" content="Best workout tracker app" />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@mrgawde" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Epic Gains" />
      <meta property="og:description" content="Best workout tracker app" />
      <meta property="og:site_name" content="Epic Gains" />
      <meta property="og:url" content="https://itsmehul.github.io" />
      <meta
        property="og:image"
        content="https://yourdomain.com/icons/apple-touch-icon.png"
      />
    </Head>
  );
};

export default PwaHeaders;
