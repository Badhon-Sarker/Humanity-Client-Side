import { NavLink } from "react-router-dom";

const HomeCard = ({item}) => {

  return (
    <div className="card bg-white shadow-xl font-playfair">
      <figure className="px-10 pt-5">
        <img
          src={item.thumbnail}
          alt="image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.title}</h2>
        <h3 className="font-semibold">{item.category}</h3>
        <h3 className="font-semibold">{new Date(item.date).toLocaleDateString()}</h3>
        <div className="card-actions">
          <NavLink to={`/details/${item._id}`}><button className="btn bg-gray-100">View Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
