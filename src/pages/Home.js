import React from "react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
