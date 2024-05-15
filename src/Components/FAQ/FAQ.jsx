import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <div className="px-10 font-playfair ">
      <h1 data-aos="fade-up" data-aos-duration="1200" className="text-center text-4xl font-playfair font-bold my-5">FAQ</h1>

      <div data-aos="fade-up" data-aos-duration="1200" className="border-2 p-2 rounded-md">
        <div 
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div  className="collapse-title text-xl font-medium">
          How can I become a volunteer with Humanity?
          </div>
          <div className="collapse-content">
            <p>Becoming a volunteer with Humanity is easy! Simply navigate to our website and click on the "Be Volunteer" section. From there, you can fill out a short application form, specifying your interests and availability. Once submitted, our team will review your application and get in touch with you regarding volunteer opportunities that match your preferences.</p>
          </div>
        </div>

        <div 
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          What kind of volunteer opportunities does Humanity offer?
          </div>
          <div className="collapse-content">
            <p> Humanity offers a diverse range of volunteer opportunities to suit various interests and skills. You can participate in community outreach programs, assist in fundraising events, provide support in disaster relief efforts, or even contribute your expertise in areas such as education, healthcare, and environmental conservation. Whatever your passion, there's a volunteering opportunity for you at Humanity!</p>
          </div>
        </div>

        <div 
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          I'm interested in volunteering, but I'm not sure if I have enough time. Can I still get involved?
          </div>
          <div className="collapse-content">
            <p>Absolutely! At Humanity, we understand that everyone has different commitments and availability. Whether you can spare a few hours a week or dedicate more time, there are volunteering opportunities tailored to your schedule. We offer both short-term and long-term projects, as well as flexible volunteering options, allowing you to make a meaningful impact on your own terms.</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          Are there any age restrictions for volunteering with Humanity?
          </div>
          <div className="collapse-content">
            <p> Humanity welcomes volunteers of all ages! While some projects may have specific age requirements due to safety or legal considerations, we strive to provide opportunities for individuals of all age groups, from teenagers to retirees. Whether you're a student looking to gain experience, a working professional seeking to give back, or a senior wanting to stay active in your community, there's a place for you at Humanity.</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          How does Humanity ensure the safety and well-being of its volunteers?
          </div>
          <div className="collapse-content">
            <p>The safety and well-being of our volunteers are paramount to us at Humanity. We take several measures to ensure a safe and positive volunteering experience, including conducting background checks for certain roles, providing thorough training and supervision, implementing safety protocols for onsite activities, and maintaining open communication channels for volunteers to raise any concerns or feedback. Your safety is our priority as we work together to make a difference in the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
