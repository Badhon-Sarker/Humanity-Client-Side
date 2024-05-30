import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Feedback = () => {
  const { user } = useContext(AuthContext);

  const handleFeedback = (e) => {
    e.preventDefault()
    
    const form = e.target;
    const email = user.email;
    const name = user.displayName;
    const one = form.one.value;
    const two = form.two.value;
    const three = form.three.value;
    const four = form.four.value;
    const five = form.five.value;
    const six = form.six.value;
    const seven = form.seven.value;
    const eight = form.eight.value;
    const nine = form.nine.value;
    const ten = form.ten.value;

    const data = {
        name, email, one, two, three, four, five, six, seven, eight, nine, ten
    }

    fetch(`${import.meta.env.VITE_SITE}/feedback`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully Submitted");
          form.reset();
        });
   
  };
  return (
    <div data-aos="zoom-in" data-aos-duration="1100">
      <Helmet>
        <title>Feedback</title>
      </Helmet>
      <h1 className="flex justify-center items-center text-3xl font-extrabold font-playfair mb-5">
        Give Your Feedback
      </h1>

      <form onSubmit={handleFeedback}>
        <div className="md:flex justify-between items-center gap-2">
          <div className="w-full ">
            <h1>Your Name*</h1>
            <input
              className="w-full border-2 p-2 rounded-md mb-2 "
              type="text"
              name="name"
              placeholder="User name"
              id=""
              defaultValue={user?.displayName}
              required
            />
          </div>

          <div className="w-full ">
            <h1>Your Email*</h1>
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

        <div className="md:flex justify-between items-center gap-2">
          <div className="w-full">
            <h1>
              How satisfied are you with your overall volunteering experience?*
            </h1>

            <select
              name="one"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Satisfied"}>Very Satisfied</option>
              <option value={"Somewhat Satisfied"}>Somewhat Satisfied</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Dissatisfied"}>Dissatisfied</option>
              <option value={"Very Dissatisfied"}>Very Dissatisfied</option>
            </select>
          </div>

          <div className="w-full">
            <h1>
              How easy was it to find volunteer opportunities that matched your
              interests?*
            </h1>

            <select
              name="two"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Easy"}>Very Easy</option>
              <option value={"Easy"}>Easy</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Difficult"}>Difficult</option>
              <option value={"Very Difficult"}>Very Difficult</option>
            </select>
          </div>
        </div>

        <div className="md:flex justify-between items-center gap-2">
          <div className="w-full">
            <h1>
              How would you rate the communication from the organization?*
            </h1>

            <select
              name="three"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Excellent"}>Excellent</option>
              <option value={"Good"}>Good</option>
              <option value={"Average"}>Average</option>
              <option value={"Poor"}>Poor</option>
              <option value={"Very Poor"}>Very Poor</option>
            </select>
          </div>

          <div className="w-full">
            <h1>
              How satisfied are you with the organization and coordination of
              volunteer events?*
            </h1>

            <select
              name="four"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Easy"}>Very Easy</option>
              <option value={"Easy"}>Easy</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Difficult"}>Difficult</option>
              <option value={"Very Difficult"}>Very Difficult</option>
            </select>
          </div>
        </div>

        <div className="md:flex justify-between items-center gap-2">
          <div className="w-full">
            <h1>
              How would you rate the support you received from staff and
              coordinators?*
            </h1>

            <select
              name="five"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Excellent"}>Excellent</option>
              <option value={"Good"}>Good</option>
              <option value={"Average"}>Average</option>
              <option value={"Poor"}>Poor</option>
              <option value={"Very Poor"}>Very Poor</option>
            </select>
          </div>

          <div className="w-full">
            <h1>
              How clear were the instructions provided for your volunteering
              tasks?*
            </h1>

            <select
              name="six"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Clear"}>Very Clear</option>
              <option value={"Clear"}>Clear</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Unclear"}>Unclear</option>
              <option value={"Very Unclear"}>Very Unclear</option>
            </select>
          </div>
        </div>

        <div className="md:flex justify-between items-center gap-2">
          <div className="w-full">
            <h1>
              How satisfied are you with the impact of your volunteer work?*
            </h1>

            <select
              name="seven"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Satisfied"}>Very Satisfied</option>
              <option value={"Somewhat Satisfied"}>Somewhat Satisfied</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Dissatisfied"}>Dissatisfied</option>
              <option value={"Very Dissatisfied"}>Very Dissatisfied</option>
            </select>
          </div>

          <div className="w-full">
            <h1>
              How relevant were the volunteer tasks to your skills and
              interests?*
            </h1>

            <select
              name="eight"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Relevant"}>Very Relevant</option>
              <option value={"Relevant"}>Relevant</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Irrelevant"}>Irrelevant</option>
              <option value={"Very Irrelevant"}>Very Irrelevant</option>
            </select>
          </div>
        </div>

        <div className="md:flex justify-between items-center gap-2">
          <div className="w-full">
            <h1>
              How likely are you to recommend this volunteering opportunity to
              others?*
            </h1>

            <select
              name="nine"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Very Likely"}>Very Likely</option>
              <option value={"Likely"}>Likely</option>
              <option value={"Neutral"}>Neutral</option>
              <option value={"Unlikely"}>Unlikely</option>
              <option value={"Very Unlikely"}>Very Unlikely</option>
            </select>
          </div>

          <div className="w-full">
            <h1>
              How would you rate your overall experience with our website?*
            </h1>

            <select
              name="ten"
              className="select select-bordered w-full mb-2"
              required
            >
              <option value={"Excellent"}>Excellent</option>
              <option value={"Good"}>Good</option>
              <option value={"Average"}>Average</option>
              <option value={"Poor"}>Poor</option>
              <option value={"Very Poor"}>Very Poor</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center my-2">
          <button className="w-full md:w-1/2 btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
