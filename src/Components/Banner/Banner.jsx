const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[300px] md:h-[450px] lg:h-[600px] font-playfair">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src="https://i.ibb.co/yNp4Fj3/image.jpg" className="w-full" />

          <div className="absolute flex items-center  transform top-0  md:bottom-1/3 text-white bg-gradient-to-r from-[#3e3e3e] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="lg:w-1/2 ml-5">
              <h1 className=" text-xl md:text-3xl font-bold my-2">
                VolunteerHub: Where Community Meets Purpose
              </h1>
              <h2 className="lg:text-xl lg:font-bold mb-4">
                Join, Connect, Serve: Your Pathway to Impact Starts Here!
              </h2>
              <p>
                Welcome to VolunteerHub, your friendly platform for making a
                difference. Sign up now to explore diverse volunteer
                opportunities, connect with like-minded individuals, and make a
                positive impact in your community
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform right-5 bottom-1">
            <a href="#slide4" className="btn btn-circle mr-2 md:mb-2">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/P1JDxmq/sd.jpg" className="w-full" />

          <div className="absolute flex items-center  transform top-0  md:bottom-1/3 text-white bg-gradient-to-r from-[#3e3e3e] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="lg:w-1/2 ml-5">
              <h1 className=" text-xl md:text-3xl font-bold my-2">
                VolunteerHub: Where Community Meets Purpose
              </h1>
              <h2 className="lg:text-xl lg:font-bold mb-4">
                Join, Connect, Serve: Your Pathway to Impact Starts Here!
              </h2>
              <p>
                Welcome to VolunteerHub, your friendly platform for making a
                difference. Sign up now to explore diverse volunteer
                opportunities, connect with like-minded individuals, and make a
                positive impact in your community
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform right-5 bottom-1">
            <a href="#slide1" className="btn btn-circle mr-2 md:mb-2">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ZJY3Mbp/d412cdcc2c0fbd599c0f6d3ccbdf590a.jpg"
            className="w-full"
          />

          <div className="absolute flex items-center  transform top-0  md:bottom-1/3 text-white bg-gradient-to-r from-[#3e3e3e] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="lg:w-1/2 ml-5">
              <h1 className=" text-xl md:text-3xl font-bold my-2">
                VolunteerHub: Where Community Meets Purpose
              </h1>
              <h2 className="lg:text-xl lg:font-bold mb-4">
                Join, Connect, Serve: Your Pathway to Impact Starts Here!
              </h2>
              <p>
                Welcome to VolunteerHub, your friendly platform for making a
                difference. Sign up now to explore diverse volunteer
                opportunities, connect with like-minded individuals, and make a
                positive impact in your community
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform right-5 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-2 md:mb-2">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/sPttJNr/blue-camera-phone-charity-cheerful.jpg"
            className="w-full"
          />

          <div className="absolute flex items-center  transform top-0  md:bottom-1/3 text-white bg-gradient-to-r from-[#3e3e3e] to-[rgba(21, 21, 21, 0)] h-full">
            <div className="lg:w-1/2 ml-5">
              <h1 className=" text-xl md:text-3xl font-bold my-2">
                VolunteerHub: Where Community Meets Purpose
              </h1>
              <h2 className="lg:text-xl lg:font-bold mb-4">
                Join, Connect, Serve: Your Pathway to Impact Starts Here!
              </h2>
              <p>
                Welcome to VolunteerHub, your friendly platform for making a
                difference. Sign up now to explore diverse volunteer
                opportunities, connect with like-minded individuals, and make a
                positive impact in your community
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform right-5 bottom-1">
            <a href="#slide3" className="btn btn-circle mr-2 md:mb-2">
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
