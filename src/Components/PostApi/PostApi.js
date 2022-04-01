import React,{useState} from 'react'

 function PostApi() {
     const [name,setName]= useState(" ");
     const [email,setEmail]= useState(" ");
     const [phone,setPhone]= useState(" ");

     function saveUser(){
         console.warn({name,email,phone})
         let data = {name,email,phone}
         fetch("https://jsonplaceholder.typicode.com/users", {
             method: "Post",
             headers:{
                 "Accept" : "application/json",
                 "Content-type" : "application/ json"
             },
             body:JSON.stringify(data)

         }).then((result)=>{
             result.json().then((resp)=>{
                 console.warn("resp", resp)
             })
         })
     }

  return (
    <div>
        <h1>Post Api use</h1>
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" value={name} name='name' onChange={(e)=>{setName(e.target.value)}} /><br />
                <label htmlFor="">Email</label>
                <input type="email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} /><br />
                <label htmlFor="">Phone</label>
                <input type="number" value={phone} name="phone" onChange={(e)=>{setPhone(e.target.value)}}  /><br />
                <button type='button' onClick={saveUser} >Save New User</button>
            </form>
        </div>
    </div>
  )
}
export default PostApi;