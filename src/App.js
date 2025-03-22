import Layout from "./components/Layout";
import React, { useEffect, useState } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <Layout /> : null;
}

export default App;