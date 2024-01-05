"use client";
import Image from 'next/image'
import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // submit button clicked
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
        }),
      });
      if (response.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully!", {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(`Error sending message: ${response.statusText}`, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      toast.error(`Error sending message: ${error}`, {
        position: toast.POSITION.TOP_CENTER
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-5/6 mx-auto">
      <div className="flex item-center justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image src="/images/building (1).jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Get in Touch</h2>
            <p>
              Do you have any questions, comments, or concerns? Interested in
              making a purchase or collaborating on something? Feel free to
              reach out below! Cheers!
            </p>
            <form onSubmit={handleFormSubmit}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name *</span>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    required
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email *</span>
                </div>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Message *</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value); 
                  }}
                  required
                ></textarea>
              </label>

              <div className="card-actions justify-end py-5">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? <span>Submitting<span className="loading loading-dots loading-xs ml-2">\</span></span> : 'Submit'}
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
