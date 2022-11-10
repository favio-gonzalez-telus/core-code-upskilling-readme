import React from 'react';
import { useState } from 'react'; 

function WishlistForm() {

  const [filteredList, setFilteredList] = useState([]);

  const list = [
    'zanahoria',
    'papaya',
    'pepino',
    'manzana',
    'apio',
    'plátano'
  ];

  const handleChange = (e) => {
    if (e.target.value === '') {
      setFilteredList(list);
    } else {
      const auxList = list.filter(element => {
        return element.includes(e.target.value);
      });

      setFilteredList(auxList);
    }

  }

  return (
    <>
    <div>
      Filter: <input type = 'text' name = 'filter' onChange = {handleChange}></input>
      <br></br>
      {
        filteredList?.map((item) => (
          <div>{item}</div> 
        ))
      }
    </div>
    {}
    </>
  )
}

export default WishlistForm
