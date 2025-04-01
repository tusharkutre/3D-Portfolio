// Optimized component ✅
import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser"; //Library to send emails

import { styles } from "../styles";
import { EarthCanvas } from "./canvas"; // Earth 3D model
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  //existing "form" obj values
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // inside main array , we have 2 more arrays defined which has specific indexes
  const formData = [
    {
      spanData: [
        {
          name: "Your Name",
        },
        {
          name: "Your Email",
        },
        {
          name: "Your Message",
        },
      ],
      inputPlaceholder: [
        {
          name: "whats your name?",
        },
        {
          name: "what's your email?",
        },
        {
          name: "Type Your Message Here...",
        },
      ],
    },
  ];

  const [loading, setLoading] = useState(false); //initially false

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form, //copying the object data and updating the name prop
      [name]: value, //updating the name prop with the new value being typed 
    });
  };
  // to submit form data to the server
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    setLoading(true); // set loading to true

    //send all email data to the corresponding user
    emailjs.send("service_vwvsl76", "template_ochqsji",{
      from_name : form.name,
      to_name : 'Tushar kutre',
      from_email : form.email,
      to_email : 'tusharkutre18@gmail.com',
      message_html : form.message,
    },
     "cPWevCM52Qj9ktuk4") //send() takes 3 inputs/params(serviceID,templateID,public Key)

     //after then ,make set loading to false
     .then(()=>{
      setLoading(false);

      // u can provide Toast message here instead Alert
      alert("Email Sent Successfully");

      // reset the form after submitting via form state
      setForm({
        name: "",
        email: "",
        message: "",
      })
     },
     (err) => {
      setLoading(false);
      console.log(err);
      alert("Error sending email");
   })
  };

  return (
    <>
      <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        {/* form div */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] mx-5 bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.heroSubText}>Get in touch</p>
          <h3 className={styles.heroHeadText}>Contact.</h3>

          {/* form starts here */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {formData[0].spanData.map((field, index) => (
              <label key={index} className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium mb-4">
                  {field.name}
                </span>
                <input
                  type="text"
                  name={field.name.toLowerCase().replace(" ", "")}
                  placeholder={formData[0].inputPlaceholder[index].name}
                  value={form[field.name.toLowerCase().replace(" ", "")]}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </label>
            ))}
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-semibold shadow-md hover:shadow-purple-600 rounded-xl"
            >
              {/* this will return either "true" : "false" based on conditional rendering */}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth model div */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {/* render Earth Canvas here */}
          <EarthCanvas />
        </motion.div>

      </section>
    </>
  );
};

export default SectionWrapper(Contact, "contact"); //id:contact for scrolling down the page