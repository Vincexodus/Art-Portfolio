"use client";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "Muhammad",
    lastName: "Ali",
    email: "ali299@gmail.com",
    message: "Hello there from Art Gallery",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Email has been sent successfully!");
      } else {
        toast.error(`Error sending email: ${response.statusText}`);
      }
    } catch (error) {
      toast.error(`Error sending email: ${error}`);
    }
  };

  return (
    <div className="w-5/6 mx-auto">
      <div className="flex item-center justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="/images/building (1).jpg" alt="" />
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
                  <span className="label-text">First Name *</span>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
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
                  placeholder=""
                  value={formData.email}
                  onChange={handleInputChange}
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
                  placeholder=""
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>

              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;