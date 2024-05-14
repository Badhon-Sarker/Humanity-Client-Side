import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import NoVolReq from "../../Components/NoVolReq/NoVolReq";

const MyVolunteerReq = () => {
  const [volunteerReq, setVolunteerReq] = useState([]);
  const { user } = useContext(AuthContext);
  const [reload, setReload] = useState(false)
 
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/myVolReq/${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVolunteerReq(data);
      });
  }, [user.email, reload]);

  const handleDelete = (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {

        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_SITE}/reqDelete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              setReload(!reload)
              Swal.fire({
                title: "Cancelled!",
                text: "Your request has been cancelled.",
                icon: "success",
              });
              
            });
        }
      });
  };

  if(volunteerReq.length === 0){
    return <NoVolReq></NoVolReq>
  }

  return (
    <div>
        <Helmet><title>My Volunteer Request</title></Helmet>
      

      <h1 className="text-center text-4xl font-playfair font-bold my-5">
        My Volunteer Request
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-black md:text-xl">
              <th>Serial</th>
              <th>Title</th>
              <th>Location</th>
              <th>Volunteer Number</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {volunteerReq.map((post, idx) => (
              <tr key={post._id}>
                <th>{idx + 1}</th>
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>{post.number}</td>
                <td>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className=" rounded-lg btn"
                  >
                    Cancel </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerReq;
