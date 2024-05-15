import { NavLink } from "react-router-dom";

const NeedVolunteerCard = ({ item }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="card h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img className="h-48" src={item.thumbnail} alt="image" />
        </figure>

        <div className="card-body">
          <div className="flex justify-center">
            <h2
              data-aos="fade-right"
              data-aos-duration="1100"
              className="text-center card-title"
            >
              {item.title}
            </h2>
          </div>

          <div className="flex justify-evenly">
            <div data-aos="fade-down" data-aos-duration="1100">
              <h1>{item.description.slice(" ", 80)}..</h1>
            </div>
          </div>

          <div className="flex justify-evenly">
            <div>
              <h1
                data-aos="fade-down"
                data-aos-duration="1200"
                className="font-semibold"
              >
                Category: <span>{item.category}</span>
              </h1>
            </div>

            <div>
              <h1
                data-aos="fade-down"
                data-aos-duration="1200"
                className="font-semibold"
              >
                Number: <span>{item.number}</span>
              </h1>
            </div>
          </div>

          <div className="flex justify-evenly">
            <div>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                className="font-semibold"
              >
                Location: <span>{item.location}</span>
              </h1>
            </div>

            <div>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                className="font-semibold"
              >
                Deadline: <span>{new Date(item.date).toLocaleDateString()}</span>
              </h1>
            </div>
          </div>

          <div className="card-actions justify-center">
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

