import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/volunteer/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  return (
    <div className=" font-playfair">
      <Helmet>
        <title>Details</title>
      </Helmet>
      {/* details of {item.title} */}
      <div>
        <h1 data-aos="fade-down" data-aos-duration="1000" className="my-4 md:text-3xl font-bold font-playfair text-center underline">
          Details
        </h1>
      </div>

      <div className="md:grid md:grid-cols-5">
        <div data-aos="fade-up-right" data-aos-duration="1000" className="col-span-5 md:col-span-3 p-2">
          <img src={item.thumbnail} alt="" />
        </div>

        <div className="col-span-2 p-2 md:p-4 flex flex-col justify-center items-center">

          <h1 data-aos="fade-up-left" data-aos-duration="1000" className="text-3xl font-bold mb-5">{item.title}</h1>

          <div  className="space-y-2">
            <div data-aos="fade-up-left" data-aos-duration="1100" className="flex items-center text-xl font-semibold gap-2">
              <h1>
                <TbCategory />
              </h1>{" "}
              <h1>Category: {item.category}</h1>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1200" className="flex items-center text-xl font-semibold gap-2">
              <h1>
                <FaLocationDot />
              </h1>{" "}
              <h1>Location: {item.location}</h1>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1300" className="flex items-center text-xl font-semibold gap-2">
              <h1>
                <MdOutlineConfirmationNumber />
              </h1>{" "}
              <h1>Volunteer Number: {item.number}</h1>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1400" className="flex items-center text-xl font-semibold gap-2">
              <h1>
                <SlCalender />
              </h1>{" "}
              <h1>Date: {new Date(item.date).toLocaleDateString()}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:p-5 p-3">
        <h1 data-aos="fade-up" data-aos-duration="1200" className="my-4 md:text-2xl font-bold font-playfair text-center">
          Description:
        </h1>

        <p data-aos="fade-up" data-aos-duration="1400" className="text-gray-600">{item.description}</p>
      </div>

      <div data-aos="zoom-in" data-aos-duration="1400" className="flex justify-center my-5">
        <NavLink to={`/beVolunteer/${id}`}>
          <button className="btn bg-gray-200">Be a Volunteer</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Details;
