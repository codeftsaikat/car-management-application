import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 flex lg:flex-row shadow-xl mt-28 mb-28">
        <div className="lg:w-1/2 relative mb-5">
          <img
            src={person}
            className="w-3/4 rounded-lg min-h-full"
            alt="image not found"
          />
          <img
            src={parts}
            className="w-1/2 absolute -bottom-10 right-24 rounded-lg border-8 border-white "
            alt="image not found"
          />
        </div>
        <div className="card-body lg:w-1/2 space-y-4">
          <h2 className="text-red-500 font-bold text-xl">About Us</h2>
          <p className="text-5xl font-bold">
            We are qualified & of experience in this field
          </p>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>

          <div>
            <button className="btn text-white font-semibold bg-orange-600">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
