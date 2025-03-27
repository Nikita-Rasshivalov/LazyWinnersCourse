import Layout from "./components/Layout";
import React, { useEffect, useState } from 'react';
import ReactGA from "react-ga4";

ReactGA.initialize("G-2K3RTFHBPP");

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <Layout /> : null;
}

export default App;