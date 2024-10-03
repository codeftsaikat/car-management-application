import React from "react";
import img_1 from "../../../assets/images/banner/1.jpg";
import img_2 from "../../../assets/images/banner/2.jpg";
import img_3 from "../../../assets/images/banner/3.jpg";
import img_4 from "../../../assets/images/banner/4.jpg";
import img_5 from "../../../assets/images/banner/5.jpg";
import img_6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img_1} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center rounded-xl w-1/3 bottom-0 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img_2} className="w-full" />
          <div className="absolute h-full flex items-center  w-1/3 bottom-0 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img_3} className="w-full" />
          <div className="absolute h-full flex items-center  w-1/3 bottom-0 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img_4} className="w-full" />
          <div className="absolute h-full flex items-center  w-1/3 bottom-0 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img_5} className="w-full" />
          <div className="absolute h-full flex items-center  w-1/3 bottom-0 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img_6} className="w-full" />
          <div className="absolute h-full flex items-center  w-1/3 bottom-0 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-xl">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-warning">
                  Discover More
                </button>
                <button className="btn btn-outline btn-warning">
                  Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
