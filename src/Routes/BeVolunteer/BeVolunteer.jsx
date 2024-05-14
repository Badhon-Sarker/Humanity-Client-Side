import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BeVolunteer = () => {
  const { user } = useContext(AuthContext);

  //   new Date()
  const [beVolunteer, setBeVolunteer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/beVolunteer/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBeVolunteer(data);
      });
  }, [id]);

  const [startDate, setStartDate] = useState([beVolunteer?.date]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const thumbnail = form.thumbnail.value;
    const title = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const number = parseInt(form.numberOfVol.value);
    const date = beVolunteer.date;
    const suggestion = form.suggestion.value;
    const email = user.email;
    const name = user.displayName;
    const status = "requested";

    const data = {
      thumbnail,
      title,
      description,
      category,
      location,
      number,
      date,
      suggestion,
      name,
      email,
      status,
    };

    fetch(`${import.meta.env.VITE_SITE}/beVolunteers`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // delete need vol 
        fetch(`${import.meta.env.VITE_SITE}/needVolDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Successfully Requested");
            form.reset();
          });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Be Volunteer</title>
      </Helmet>
      <h1 className="flex justify-center items-center text-3xl font-extrabold font-playfair">
        Be a Volunteer
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="border-2 p-2 md:p-5 w-full my-3">
          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Thumbnail *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="thumbnail"
                placeholder="Thumbnail URL"
                id=""
                defaultValue={beVolunteer.thumbnail}
                required
                readOnly
              />
            </div>

            <div className="w-full">
              <h1>Title *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="postTitle"
                placeholder="Post title"
                id=""
                defaultValue={beVolunteer.title}
                required
                readOnly
              />
            </div>
          </div>

          <div>
            <h1>Description *</h1>
            <textarea
              className="textarea textarea-bordered w-full h-48"
              name="description"
              placeholder="Short description"
              required
              defaultValue={beVolunteer.description}
              readOnly
            ></textarea>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Category *</h1>
              <select
                name="category"
                className="select select-bordered w-full mb-2"
                required
                readOnly
              >
                <option defaultValue={beVolunteer.category}>
                  {beVolunteer.category}
                </option>
                <option disabled value={"Healthcare"}>
                  Healthcare
                </option>
                <option disabled value={"Education"}>
                  Education
                </option>
                <option disabled value={"Social Service"}>
                  Social Service
                </option>
                <option disabled value={"Animal Welfare"}>
                  Animal Welfare
                </option>
                <option disabled value={"Environment"}>
                  Environment
                </option>
              </select>
            </div>

            <div className="w-full">
              <h1>Location *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="location"
                placeholder="Location"
                defaultValue={beVolunteer.location}
                required
                readOnly
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Number Of Volunteer *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="number"
                name="numberOfVol"
                placeholder="Number of volunteer"
                id=""
                defaultValue={beVolunteer.number}
                required
                readOnly
              />
            </div>

            {/* <div className="w-full">
              <h1>Deadline *</h1>
              <div className="w-full border-2 p-2 rounded-md mb-2">
                <p>{new Date(beVolunteer.date).toLocaleDateString()}</p>
              </div>
            </div> */}

            <div className="w-full">
              <h1>Date*</h1>
              <div className="p-2 border-2 rounded-lg">
                <DatePicker
                  selected={beVolunteer.date}
                  onChange={(date) => setStartDate(date)}
                  readOnly
                />
              </div>
            </div>

            {/* <div className="w-full">
              <h1>Deadline *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="date"
                name="date"
                placeholder="Date"
                id=""
                
                defaultValue={(beVolunteer.date)}
                // defaultValue={new Date(beVolunteer.date).toLocaleDateString()}
                required
                readOnly
              />
            </div> */}
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full ">
              <h1>Organizer Name</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2 "
                type="text"
                name="name"
                placeholder="User name"
                id=""
                defaultValue={beVolunteer.name}
                readOnly
              />
            </div>

            <div className="w-full ">
              <h1>Organizer Email</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2 "
                type="email"
                name=""
                placeholder="User email"
                id="email"
                defaultValue={beVolunteer.email}
                required
                readOnly
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full ">
              <h1>Volunteer Name</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2 "
                type="text"
                name="name"
                placeholder="User name"
                id=""
                defaultValue={user?.displayName}
                readOnly
              />
            </div>

            <div className="w-full ">
              <h1>Volunteer Email</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2 "
                type="email"
                name=""
                placeholder="User email"
                id="email"
                defaultValue={user?.email}
                required
                readOnly
              />
            </div>
          </div>

          <div>
            <h1>Suggestion *</h1>
            <textarea
              className="textarea textarea-bordered w-full"
              name="suggestion"
              placeholder="Your suggestion"
              defaultValue={beVolunteer?.suggestion}
              required
            ></textarea>
          </div>

          <div>
            <h1 className="font-semibold my-3">
              Status: <span className="text-green-600">Requested</span>
            </h1>
          </div>

          <div className="flex justify-center my-2">
            <button className="w-full md:w-1/2 btn">Request</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BeVolunteer;
