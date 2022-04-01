import React, { useEffect, useState } from "react";
import classes from "./Api.module.css";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUser()
  }, []);
  function getUser(){
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        //  console.warn("result", resp)
        setData(resp);
      });
    });
  }
  console.log(data);
  
const deleteUser = (index) => {
  alert('id deleted  succesfully  :' + index)
  const updateData = data.filter ((item)=>{
    return index !== item.id;
    
  });
  setData(updateData);
  
}

const editUser = (id) =>{
  alert("id edit successfully: " + id)
  let newElement = data.find((elem)=>{
    return elem.id ===id
  })
  console.log(newElement)
}


  return (
    <div>
      <h1>Get API Call</h1>
      <div>
        <table className={classes.tableData} style={{ width: "90%", margin: "auto" }}>
          <tr className={classes.tableRow}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Operations</th>
          </tr>

          {data.map((item) => {
            return (
              <>
                <tr className={classes.tableContent}>
                  <td>{item.id}.</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    {item.address.street +
                      " " +
                      item.address.city +
                      " " +
                      item.address.suite}
                  </td>
                  <tr  >
                  <td style={{margin:"10px", padding:'20px'}}><button className="btn-primary" onClick={()=> editUser(item.id)}>Edit</button></td>
                  <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
                  
                  </tr>
                  
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default Api;
