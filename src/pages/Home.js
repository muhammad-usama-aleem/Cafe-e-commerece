import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Services from "../component/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../component/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
