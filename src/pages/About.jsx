import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page py-5 bg-body-secondary">
      <div className=" py-5 mb-0 d-flex px-3 gap-6  align-items-center">
        <div className="col-sm-5 d-flex d-sm-block flex-column align-items-center">
          <h1 className="mb-5 text-black fw-semibold text-center text-uppercase text-sm-start">About Us</h1>

          <p className="mb-5 text-black fw-semibold text-center text-sm-start">
            At Selva
            <span style={{ color: "purple" }}>Nila</span>, dining is not just
            about food—it's a sensory journey that tells a story of passion,
            culture, and creativity. Our chefs transform the finest local and
            seasonal ingredients into artful dishes, blending traditional
            flavors with modern culinary techniques. Each plate is thoughtfully
            curated to ignite your palate and spark conversation.
          </p>

          <p className="mb-5 text-black fw-semibold text-center text-sm-start">
            More than just a place to eat, Selva
            <span style={{ color: "purple" }}>Nila</span> is a hub for memorable
            experiences. From the warm embrace of our ambiance to the
            personalized touches in our service, we are dedicated to making your
            visit extraordinary. Join us, and discover how every meal here
            becomes a celebration of taste, innovation, and community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
