import { useEffect, useState } from "react";
import NeedVolunteerCard from "../NeedVolunteerCard/NeedVolunteerCard";
import { Helmet } from "react-helmet-async";
const NeedVolunteer = () => {
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

  if (volunteers.length === 0) {
    return (
      <div>
        <h1 className="text-center text-4xl font-playfair font-bold my-5">
          No Need Volunteers
        </h1>

        <div className="flex justify-center items-center my-10">
          <img src="https://i.ibb.co/7g7WWPc/Open-Doodles-Messy.png" alt="" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Need Volunteer</title>
      </Helmet>
      <h1 className="my-4 md:text-3xl font-bold font-playfair text-center">
        Need Volunteer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        {volunteers?.map((item) => (
          <NeedVolunteerCard item={item} key={item._id}></NeedVolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
