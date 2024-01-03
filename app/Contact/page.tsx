"use client"
import React, { useState } from 'react'

const initValues = { firstName: "", lastName: "",  email: "",  message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const ContactPage = () => {
  // const toast = useToast();
  const [state, setState] = useState(initState);
  // const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  // const onBlur = ({ target }) =>
  //   setTouched((prev) => ({ ...prev, [target.name]: true }));

  // const handleChange = ({ target }) =>
  //   setState((prev) => ({
  //     ...prev,
  //     values: {
  //       ...prev.values,
  //       [target.name]: target.value,
  //     },
  //   }));

  // const onSubmit = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));
  //   try {
  //     await sendContactForm(values);
  //     setTouched({});
  //     setState(initState);
  //     toast({
  //       title: "Message sent.",
  //       status: "success",
  //       duration: 2000,
  //       position: "top",
  //     });
  //   } catch (error) {
  //     setState((prev) => ({
  //       ...prev,
  //       isLoading: false,
  //       error: error.message,
  //     }));
  //   }
  // };

  return (
    <div className='w-5/6 mx-auto'>
      <div className='flex item-center justify-center'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="/images/building (1).jpg" alt=""/></figure>
          <div className="card-body">
            <h2 className="card-title">Get in Touch</h2>
            <p>Do you have any questions, comments, or concerns? Interested in making a purchase or collaborating on something? Feel free to reach out below! Cheers!
            </p>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name *</span>
              </div>
              <div className="flex space-x-4">
                <input type="text" placeholder="First Name" name="firstName" value= {values.firstName} className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Last Name" name="lastName" value= {values.lastName} className="input input-bordered w-full max-w-xs" />
              </div>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email *</span>
              </div>
              <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message *</span>
              </div>
              <textarea className="textarea textarea-bordered h-24" placeholder=""></textarea>
            </label>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div role="alert" className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Email has been sent successfully!</span>
      </div>
      <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Incomplete inputs!</span>
      </div> */}
    </div>
    
  )
}

export default ContactPage