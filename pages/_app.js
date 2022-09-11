import { useEffect, useState } from "react";

import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    );
  }
}

export default MyApp;
