import { useEffect, useState } from "react";

import { StoreProvider } from "../utils/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer
          position="top-right"
        />
        <Component {...pageProps} />
      </StoreProvider>
    );
  }
}

export default MyApp;
