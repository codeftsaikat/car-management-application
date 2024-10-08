import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Checkout = () => {
  const checkout = useLoaderData();
  const { title, img, description, price, _id } = checkout;
  console.log(price);

  const { user } = useContext(AuthContext);

  const handleCheckoutServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const booking = {
      name,
      date,
      email,
      price,
      img,
      service: title,
      service_id: _id,
    };
    console.log("----->>>", booking);


    fetch('http://localhost:5000/bookings',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);   
      if (data.insertedId) {
        alert("Service added successfully")
      }   
    })
   
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl">Book Now!</h1>

      <form onSubmit={handleCheckoutServices} className="card-body">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              name="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button>Login</button>
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
