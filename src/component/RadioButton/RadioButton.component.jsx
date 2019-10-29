import React from "react";
import './RadioButton.component.scss';
import { Field } from "formik";
const RadioButton = props => {
  const { values } = props;
  return (
    <div className = "radioquestion">
      <h5>
          <span className="num">{props.num}.{" "}</span>
          <span className="title">{props.title}</span>
        </h5>
      <div className = "gender-radio">
        <Field
          type="radio"
          name="gender"
          value="male"
          id="genderMale"
          checked={values.gender === "male"}
        />
        <label htmlFor="genderMale">{" "}Nam</label>
      </div>
      <div className = "gender-radio">
        <Field
          type="radio"
          name="gender"
          value="female"
          id="genderFemale"
          checked={values.gender === "female"}
        />
        <label htmlFor="genderFemale">{" "}Nữ</label>
      </div>
    </div>
  );
};

export default RadioButton;
