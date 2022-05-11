import HomeHeader from "../components/layout/HomeHeader";
import { Fragment } from "react";
import "../stylesheet/Nav.css";
import Footer from "../components/layout/Footer";

const Home = () => {
  return(
    <Fragment>
      <HomeHeader />
      <Footer />
    </Fragment>
  )
}

export default Home;