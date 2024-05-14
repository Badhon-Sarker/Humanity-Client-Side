import { Helmet } from "react-helmet-async";

const NoVolReq = () => {
  return (
    <div>
        <Helmet><title>My Volunteer Request</title></Helmet>
      <h1 className="text-center text-4xl font-playfair font-bold my-5">
         Empty Volunteer Request
      </h1>

      <div className="flex justify-center items-center my-10">

        <img src='https://i.ibb.co/7g7WWPc/Open-Doodles-Messy.png' alt="" />

      </div>
    </div>
  );
};


export default NoVolReq;
