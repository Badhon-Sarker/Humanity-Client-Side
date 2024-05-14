import { useEffect, useState } from "react";
import NeedVolunteerCard from "../NeedVolunteerCard/NeedVolunteerCard";
import { Helmet } from "react-helmet-async";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { PiTextColumnsBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const NeedVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [grid, setGrid] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/volunteers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const search= e.target.search.value;
   
        fetch(`${import.meta.env.VITE_SITE}/volunteersSearch?search=${search}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setVolunteers(data)
          });
    

  };

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

      <div className="flex justify-center items-center gap-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-2">
            <div>
              <label>
                <input
                  type="text"
                  name="search"
                  placeholder="Search here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <input className="btn" type="submit" value="Search" />
            </div>
          </div>
        </form>

        <div onClick={() => setGrid(!grid)} className="text-4xl">
          {grid ? <RiLayoutGrid2Fill /> : <PiTextColumnsBold />}
        </div>
      </div>

      {!grid ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-black md:text-xl">
              <th>Serial</th>
              <th>Title</th>
              <th>Location</th>
              <th>Number</th>
              <th>Deadline</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {volunteers.map((post, idx) => (
              <tr key={post._id}>
                <th>{idx + 1}</th>
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>{post.number}</td>
                <td>{new Date(post.date).toLocaleDateString()}</td>

                <td>
                  <NavLink to={`/details/${post._id}`}>
                    <button className="btn bg-gray-100">View Details</button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
          {volunteers?.map((item) => (
            <NeedVolunteerCard item={item} key={item._id}></NeedVolunteerCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
