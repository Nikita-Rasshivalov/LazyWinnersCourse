import Layout from "./components/Layout";
import React, { useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import {GA_ID,YA_ID} from "./assets/data/Constants"
import {insertYandexMetrika}  from  "./utils/insertYandexMetrika"

ReactGA.initialize(GA_ID);

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    insertYandexMetrika(YA_ID);
  }, []);

  return mounted ? <Layout /> : null;
}

export default App;