import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Navbar />
      <main id="content">{children}</main>
      <Footer autor="Lisandro Palavecino" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
