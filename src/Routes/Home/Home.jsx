import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import HomeCard from "../../Components/HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);

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
        <Helmet><title>Home</title></Helmet>
        
      <div>
        <Banner></Banner>
      </div>

      <div>
        <h1 className="my-4 md:text-3xl font-bold font-playfair text-center">
          Volunteer Needs Now
        </h1>

        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
          {volunteers?.map((item) => (
            <HomeCard item={item} key={item._id}></HomeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
