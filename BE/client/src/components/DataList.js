import React, { useEffect, useState } from "react";
import axios from "axios";

function DataList ({ history }) {
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const url =
      "http://localhost:5000/api/restricted/data";
console.log(data)
    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
            console.log('list', response)
            setData(response.data);
        })
        .catch(e => {
          console.log('error', e.response);
        //   localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, [history]);
  if (!data) return <div>Loading</div>
  return (
    <>
      <div className="friendHeader">
          <h1>My Favorite Dishes</h1>
      </div>
   
      {data.map(data => 
      <div className="friendList">
        <p className="friendName">Course: {data.course}</p>
        <p className="friendAge">Title: {data.name}</p>
        <p className="friendEmail">Technique: {data.technique}</p>
      </div>)}

      <button
        className="btn logoutButton"
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/");
        }}
      >
        Logout
      </button>

    </>
  );
}


export default DataList;
