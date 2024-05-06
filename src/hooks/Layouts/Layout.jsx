import { connect } from "react-redux";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {})(Layout);
