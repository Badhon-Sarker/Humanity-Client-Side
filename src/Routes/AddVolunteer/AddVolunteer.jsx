import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const thumbnail = form.thumbnail.value;
    const title = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const number = form.numberOfVol.value;
    const date = form.date.value;
    const email = user.email;
    const name = user.displayName;

    const data = {
        thumbnail, title, description, category, location, number, date, email, name
    }

    console.log(data)
  };
  return (
    <div>
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
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="text"
                name="category"
                placeholder="Category"
                id=""
                required
              />
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
              <h1>Date *</h1>
              <input
                className="w-full border-2 p-2 rounded-md mb-2"
                type="date"
                name="date"
                placeholder="Date"
                id=""
                required
              />
            </div>
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
