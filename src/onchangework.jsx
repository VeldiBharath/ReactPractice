import React, { useState } from "react";

function OnChangeWork() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [payMethod, setPayMethod] = useState("Visa");
  const [shipping, setShipping] = useState("PickUp");

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const quantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const paymentChange = (event) => {
    setPayMethod(event.target.value);
  };

  const shippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <h1>
        This is Onchange component, learning Onchange event handler -- triggers
        when there is change to input.
      </h1>

      <input value={name} type="text" onChange={nameChange} />
      <p>Name : {name}</p>

      <input value={quantity} type="number" onChange={quantityChange} />
      <p>Quantity : {quantity}</p>

      <select value={payMethod} onChange={paymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Paypal">Paypal</option>
      </select>
      <p>Payment Method : {payMethod}</p>

      <label>
        <input
          value="PickUp"
          checked={shipping === "PickUp"}
          type="radio"
          onChange={shippingChange}
        />
        PickUp
      </label>
      <br />
      <label>
        <input
          value="Delivery"
          checked={shipping === "Delivery"}
          type="radio"
          onChange={shippingChange}
        />
        Delivery
      </label>
      <p>Shipping Method : {shipping}</p>
      <hr />
    </div>
  );
}

export default OnChangeWork;
