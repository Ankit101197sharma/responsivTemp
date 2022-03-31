import React, { useEffect, useState } from "react";
import classes from "./Api.module.css";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        //  console.warn("result", resp)
        setData(resp);
      });
    });
  }, []);
  console.warn(data);
  return (
    <div>
      <h1>Get API Call</h1>
      <div>
        <table className={classes.tableH}>
          <tr>
            <th>Name</th>
            
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <th>
                  <td>{item.name}</td>
                </th>
                
                <th>
                 
                  <td>{item.email}</td>
                </th>
                <th>
                  
                  <td>{item.phone}</td>
                </th>
                
                <th>
                  <td>{item.address.street + " " + item.address.city + " " + item.address.suite}</td>
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default Api;
