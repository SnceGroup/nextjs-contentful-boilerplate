import "@styles/globals.scss";
import TagManager from "react-gtm-module";
import React, { useEffect } from "react";
import getConfig from 'next/config';

function MyApp({ Component, pageProps }) {
  const { publicRuntimeConfig } = getConfig();
  useEffect(() => {
    if (publicRuntimeConfig.GTM_CONTAINER) {
      TagManager.initialize({ gtmId: publicRuntimeConfig.GTM_CONTAINER });
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
