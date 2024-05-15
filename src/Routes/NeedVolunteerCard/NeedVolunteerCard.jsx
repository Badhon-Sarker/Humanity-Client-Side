import { NavLink } from "react-router-dom";

const NeedVolunteerCard = ({ item }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="card card-compact bg-base-100 shadow-xl h-96">
        <figure>
          <img className="h-48" src={item.thumbnail} alt="image" />
        </figure>
        <div className="card-body">
          <h2 data-aos="zoom-in" data-aos-duration="1200" className="card-title">{item.title}</h2>
          <div>
            <div data-aos="fade-down" data-aos-duration="1100">
              <h1>{item.description.slice(" ", 80)}..</h1>
            </div>
            <div className="flex justify-evenly gap-3 font-semibold my-2">
              <div data-aos="fade-right" data-aos-duration="1200">Category: {item.category}</div>
              <div data-aos="fade-left" data-aos-duration="1200">Number: {item.number}</div>
            </div>

            <div className="flex justify-evenly gap-3 font-semibold my-2">
              <div data-aos="fade-right" data-aos-duration="1200">Location: {item.location}</div>
              <div data-aos="fade-left" data-aos-duration="1200">Date: {new Date(item.date).toLocaleDateString()}</div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1100" className="card-actions justify-center">
            <NavLink to={`/details/${item._id}`}>
              <button className="btn bg-gray-100">View Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;
