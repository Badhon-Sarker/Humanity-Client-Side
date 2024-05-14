import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import HomeCard from "../../Components/HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import FAQ from "../../Components/FAQ/FAQ";
import Testimonials from "../../Components/Testimonial/Testimonials";

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);

  const slice = volunteers?.slice(0, 2);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/volunteers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* banner */}

      <div>
        <Banner></Banner>
      </div>

      {/* data */}

      <div>
        <h1 className="text-center text-4xl font-playfair font-bold my-5">
          Volunteer Needs Now
        </h1>

        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
          {slice?.map((item) => (
            <HomeCard item={item} key={item._id}></HomeCard>
          ))}
        </div>

        <div className="flex justify-center my-5 ">
          <NavLink to={"/needVolunteer"}>
            <button className="btn bg-gray-200">See All</button>
          </NavLink>
        </div>

        <hr />
      </div>

      <div>
        <Testimonials></Testimonials>
      </div>

      {/* FAQ */}

      <div className="my-10">
      <FAQ></FAQ>
      </div>

     
      

     
    </div>
  );
};

export default Home;
