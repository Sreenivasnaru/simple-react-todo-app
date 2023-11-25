import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName:"",
    username:"",
    password:""
  })
    // let [fullName, setFullName] = useState("Sreenu");
    // let [username, setUsername] = useState("");

    // let handleNameChange = (event) => {
    //   setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //   setUsername(event.target.value)
    // }
    let handleInputChange = (event) => {

      setFormData( (currData) => {
          return {...currData, [event.target.name]: event.target.value };
      });
    };

    let handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData)
      setFormData({
        fullName:"",
        username:"",
        password:""
      })
    }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Full Name</label>
      <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
      <br />
      <label htmlFor="username">Full Name</label>
      <input placeholder="enter username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
      <br /> 
      <label htmlFor="password">Full Name</label>
      <input placeholder="enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/> 
      <button>Submit</button>
    </form>
  );
}
