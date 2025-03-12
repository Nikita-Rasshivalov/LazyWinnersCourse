import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Main from "./shared/Main";
import Background from "./Background";


const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
      <Background />
    </div>
  );
};

export default Layout;