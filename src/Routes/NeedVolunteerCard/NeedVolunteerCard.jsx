import { NavLink } from "react-router-dom";

const NeedVolunteerCard = ({item}) => {

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={item.thumbnail}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <div>
            <div>
                <h1>{(item.description).slice(" ", 80)}..</h1>
            </div>
            <div className="flex justify-evenly gap-3 font-semibold my-2">
                <div>Category: {item.category}</div>
                <div>Number: {item.number}</div>
            </div>

            <div className="flex justify-evenly gap-3 font-semibold my-2">
                <div>Location: {item.location}</div>
                <div>Date: {new Date(item.date).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="card-actions justify-center"> 
            <NavLink to={`/details/${item._id}`}><button className="btn bg-gray-100">View Details</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;
