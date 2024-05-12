import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const thumbnail = form.thumbnail.value;
    const title = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const number = parseInt(form.numberOfVol.value);
    const date = startDate;
    const email = user.email;
    const name = user.displayName;

    const data = {
      thumbnail,
      title,
      description,
      category,
      location,
      number,
      date,
      name,
      email
    };
    


    fetch(`${import.meta.env.VITE_SITE}/volunteers`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
          toast.success("Successfully Added")
          form.reset()
        })     


  };
  return (
    <div>
      <Helmet><title>Add Volunteer</title></Helmet>
      <h1 className="flex justify-center items-center text-3xl font-extrabold font-playfair">
        Add Volunteer
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
                required
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
                required
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
            ></textarea>
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full">
              <h1>Category *</h1>
              <select
                name="category"
                className="select select-bordered w-full mb-2"
                required
              >
                <option value={"Healthcare"}>Healthcare</option>
                <option value={"Education"}>Education</option>
                <option value={"Social Service"}>Social Service</option>
                <option value={"Animal Welfare"}>Animal Welfare</option>
                <option value={"Environment"}>Environment</option>
              </select>
            </div>

            <div className="w-full">
              <h1>Location *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="location"
                placeholder="Location"
                required
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
                required
              />
            </div>

            <div className="w-full">
              <h1>Date*</h1>
              <div className="p-2 border-2 rounded-lg"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>

            </div>

            {/* <div className="w-full">
              <h1>Date *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="date"
                name="date"
                placeholder="Date"
                id=""
                required
              />
            </div> */}
          </div>

          <div className="md:flex justify-between gap-2">
            <div className="w-full ">
              <h1>User Name</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2 "
                type="text"
                name="name"
                placeholder="User name"
                id=""
                defaultValue={user?.displayName}
              />
            </div>

            <div className="w-full ">
              <h1>User Email</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2 "
                type="email"
                name=""
                placeholder="User email"
                id="email"
                defaultValue={user?.email}
                required
              />
            </div>
          </div>

          <div className="flex justify-center my-2">
            <button className="w-full md:w-1/2 btn">Add Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteer;
