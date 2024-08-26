import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country : "India",
    streetAddress : "",
    city : "",
    state : "",
    postalCode : "",
    comments : false,
    candidates : false,
    offers : false,
    pushNotifications : ""

  });

  function changeHandler(event) {
    const {name,value,type,checked} = event.target;
    setFormData( (prevData) => {
      return {
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center my-4 py-8 px-4  max-w-[700px] mx-auto border-solid border-2 border-slate-200">
      <form onSubmit={submitHandler} className="w-[95%]">

        <label htmlFor="firstName" className="font-semibold">First name</label><br/>
        <input type="text" name="firstName" id="firstName" placeholder="Enter firstName" value={formData.firstName} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/>
        <label htmlFor="lastName" className="font-semibold">Last name</label><br/>
        <input type="text" name="lastName" id="lastName" placeholder="Enter lastName" value={formData.lastName} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/>
        <label htmlFor="email" className="font-semibold">Email Address</label><br/>
        <input type="email" name="email" id="email" placeholder="Enter Email" value={formData.email} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/>
        <label htmlFor="country" className="font-semibold">Country</label><br/>
        <select id="country" name="country" value={formData.country} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full" onChange={changeHandler}>
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>Mexic</option>
        </select>

        <br/>
        <label htmlFor="streetAddress" className="font-semibold">Street Address</label><br/>
        <input type="text" name="streetAddress" id="streetAddress" placeholder="B-25C" value={formData.streetAddress} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/>
        <label htmlFor="city" className="font-semibold">City</label><br/>
        <input type="text" name="city" id="city" placeholder="Enter City" value={formData.city} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/>
        <label htmlFor="state" className="font-semibold">State</label><br/>
        <input type="text" name="state" id="state" placeholder="Enter state" value={formData.state} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/>
        <label htmlFor="postalCode" className="font-semibold">Postal Code</label><br/>
        <input type="text" name="postalCode" id="postalCode" placeholder="Enter postalCode" value={formData.postalCode} onChange={changeHandler} className="border border-sky-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md py-1 px-2 mt-1 w-full"></input>

        <br/><br/>
        <fieldset>
          <legend className="font-semibold">By Email</legend>

          <div className="flex gap-4">
            <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changeHandler} className="cursor-pointer"></input>
            <div className="mt-2">
              <label htmlFor="comments" className="font-semibold">Comments</label>
              <p className="opacity-70">Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <input type="checkbox" id="candidates" name="candidates" checked={formData.candidates} onChange={changeHandler} className="cursor-pointer"></input>
            <div className="mt-2">
              <label htmlFor="candidates" className="font-semibold">Candidates</label>
              <p className="opacity-70">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changeHandler} className="cursor-pointer"></input>
            <div className="mt-2">
              <label htmlFor="offers" className="font-semibold">Offers</label>
              <p className="opacity-70">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br/><br/>
        <fieldset>
          <legend className="font-semibold">Push Notifications</legend>
          <p className="opacity-80">These are delivered via SMS to your mobile phone.</p>

          <input type="radio" name="pushNotifications" id="pushEverything" value="Everything" onChange={changeHandler} className="mt-4"></input>
          <label htmlFor="pushEverything" className="font-semibold ml-4">Everything</label>

          <br/>
          <input type="radio" name="pushNotifications" id="pushEmail" value="Same as email" onChange={changeHandler} className="mt-2"></input>
          <label htmlFor="pushEmail" className="font-semibold ml-4">Same as email</label>

          <br/>
          <input type="radio" name="pushNotifications" id="pushNoting" value="No Push Notification" onChange={changeHandler} className="mt-2"></input>
          <label htmlFor="pushNoting" className="font-semibold ml-4">No Push Notification</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 mt-2">Save</button>

      </form>
    </div>
  );
}

export default App;
