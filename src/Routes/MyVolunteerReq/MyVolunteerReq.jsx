import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const MyVolunteerReq = () => {
  const [volunteerReq, setVolunteerReq] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SITE}/myVolReq/${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVolunteerReq(data);
      });
      
  }, []);

  return (
    <div>
      <Helmet>
        <title>My Volunteer Request</title>
      </Helmet>

      my vol req{volunteerReq.length}
      update okk
    </div>
  );
};

export default MyVolunteerReq;
