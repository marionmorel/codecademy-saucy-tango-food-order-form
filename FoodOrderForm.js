import React, { useState } from "react";

function FoodOrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [order, setOrder] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      alert(`Order successful!\n\nYour order was ${order}.\n\nPlease show your confirmation number for pickup.`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={name} 
          onChange={({target}) => setName(target.value)}
        />
        <br/>
        <label htmlFor="phone">Phone:</label>
        <input 
          id="phone" 
          name="phone" 
          type="number" 
          value={phone} 
          onChange={({target}) => setPhone(target.value)}
        />
        <br/>
        <label htmlFor="address">Address:</label>
        <input 
          id="address" 
          name="address" 
          type="text" 
          value={address} 
          onChange={({target}) => setAddress(target.value)}
        />
        <br/>
        <label htmlFor="order">Order:</label>
        <input 
          id="order" 
          name="order" 
          type="text" 
          value={order} 
          onChange={({target}) => setOrder(target.value)}
        />
        <br/>
        <button type="submit">Submit Order</button>
    </form>
  )
}

export default FoodOrderForm;