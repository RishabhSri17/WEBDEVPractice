import "./App.css";
import React, { useState } from "react";

function App() {
  //const[firstName,setFirstName]=useState("");
  //const[lastName,setLastName]=useState("");

  //console.log(firstName);
  //console.log(lastName);
  //function changeFirstNameHandler(event){
  //  /* console.log(event.target.value); */
  //  setFirstName(event.target.value);
  //}
  //function changeLastNameHandler(event){
  //  /* console.log(event.target.value); */
  //  setLastName(event.target.value);
  //}

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    modee: "",
    favoriteLanguage: "",
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          /* onChange={changeFirstNameHandler} */
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          /* onChange={changeLastNameHandler} */
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          /* onChange={changeLastNameHandler} */
          onChange={changeHandler}
          value={formData.email}
        />

        <br></br>
        <textarea
          placeholder="Enter Your Comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible?</label>

        <br></br>

        <input
          type="radio"
          id="Online-Mode"
          name="mode"
          value="Online-Mode"
          onChange={changeHandler}
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label>

        <br></br>

        <input
          type="radio"
          id="Offline-Mode"
          name="mode"
          value="Offline-Mode"
          onChange={changeHandler}
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Online-Mode">Offline-Mode</label>

        <hr />
        <fieldset>
          <legend>Select Mode</legend>
          <input
            type="radio"
            id="Online-Mode"
            name="modee"
            value="Online-Mode"
            onChange={changeHandler}
            checked={formData.modee === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <br />

          <input
            type="radio"
            id="Offline-Mode"
            name="modee"
            value="Offline-Mode"
            onChange={changeHandler}
            checked={formData.modee === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <br />

        <br></br>

        <select
          name="favoriteLanguage"
          value={formData.favoriteLanguage}
          onChange={changeHandler}
        >
          <option value="">Select your favorite language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
        </select>

        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default App;
