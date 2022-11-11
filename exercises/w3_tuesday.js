import React from 'react';
import { useState, useEffect } from 'react'; 

function WishlistForm() {

  const [user, setUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const resetData = (e) => {
    getData();
  }

  const getData = async () => {
    const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const url = `https://jsonplaceholder.typicode.com/users/${random}`;
    fetch(url).then(data => {
      data.json().then( user => {
        setUser(user);
      })
    });

    console.log(user);
  }

  return (
    <>
    <div>
      <button onClick={resetData}>
        Reset
      </button>
      <h1>User Data</h1>
      <div>
        <b>Name:</b> {user.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Email:</b> {user.email}
      </div>
      <div>
        <b>Phone:</b> {user.phone}
      </div>
    </div>
    </>
  )
}

export default WishlistForm
