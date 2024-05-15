import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyPost = () => {
  const [myPost, setMyPost] = useState([]);
  const [reload, setReload] = useState(false)

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/myPost/${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyPost(data);
      });
  }, [user.email, reload]);

  const handleDelete = (id) => {
    // console.log("deleted hocce", id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {

        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_SITE}/postDelete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              setReload(!reload)
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              
            });
        }
      });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Helmet>
        <title>Manage My Post</title>
      </Helmet>

      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        Manage My Post
      </h1>

      <div data-aos="fade-up" data-aos-duration="1200" className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-black md:text-xl">
              <th>Serial</th>
              <th>Title</th>
              <th>Location</th>
              <th>Volunteer Number</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myPost.map((post, idx) => (
              <tr key={post._id}>
                <th>{idx + 1}</th>
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>{post.number}</td>
                <td>
                  <Link to={`/updatePost/${post._id}`} >
                    <button className="bg-green-400 text-xl rounded-lg btn text-white">
                      <FaPenNib />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-error text-xl rounded-lg btn text-white"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
