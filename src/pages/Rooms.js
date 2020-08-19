import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link to="/" className="btn-primary">
          Return HOME
        </Link>
      </Banner>
    </Hero>
  );
}
