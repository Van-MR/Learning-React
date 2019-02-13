import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="firstName"
        />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="lasttName"
        />
        <input
          type="text"
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="age"
        />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={props.handleChange}
            checked={props.data.gender === "male"}
          />
          male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={props.handleChange}
            checked={props.data.gender === "male"}
          />
          female
        </label>
        <select
          name="distination"
          value={props.data.distination}
          onChange={props.handleChange}
        >
          <option value="">pleae select</option>
          <option value="germany">germany</option>
          <option value="chinese">chinese</option>
          <option value="korean">korean</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegant"
            onChange={props.handleChange}
            checked={props.data.isVegant}
          />
          isVegant?
        </label>
        <label>
          <input
            type="checkbox"
            name="isHugor"
            onChange={props.handleChange}
            checked={props.data.isHugor}
          />
          isHugor?
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
          isKosher?
        </label>
        <button>Submit</button>
      </form>
      <hr />
      <h2>enterde information</h2>
      <p>
        your name {props.data.firstName} {props.data.lastName}
      </p>
      <p>your age {props.data.age}</p>
      <p>your gender {props.data.gender}</p>
      <p>your distination {props.data.distination}</p>
      <div>
        <h3>your dietary retirction </h3>
        <p> Vegant: {props.data.isVegant ? "yes" : "no"}</p>
        <p> Hugor: {props.data.isHugor ? "yes" : "no"}</p>
        <p> Kosher: {props.data.isKosher ? "yes" : "no"}</p>
      </div>
    </main>
  );
}

export default FormComponent;
