import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};
