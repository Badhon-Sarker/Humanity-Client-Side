
import { NavLink } from "react-router-dom";

const HomeCard = ({item}) => {


  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="card bg-white shadow-xl font-playfair">
      <figure className="px-10 pt-5">
        <img
          src={item.thumbnail}
          alt="image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 data-aos="zoom-in" data-aos-duration="1000" className="card-title">{item.title}</h2>
        <h3 data-aos="fade-down" data-aos-duration="1000" className="font-semibold">{item.category}</h3>
        <h3 data-aos="fade-down" data-aos-duration="1000" className="font-semibold">{new Date(item.date).toLocaleDateString()}</h3>

        <div data-aos="fade-up" data-aos-duration="1000" className="card-actions">
          <NavLink to={`/details/${item._id}`}><button className="btn bg-gray-100">View Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
