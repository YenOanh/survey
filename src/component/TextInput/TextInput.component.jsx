import React from "react";
import "./TextInput.component.scss";
import { Field } from "formik";
const textInput = props => {
    const {value,name,handleBlur,handleFocus,errors,touched} = props;
    return (
        <div className = "textquestion">
        <h5>
          <span className="num">{props.num}.{" "}</span>
          <span className="title">{props.title}</span>
        </h5>
        <Field
          type="text"
          className="textinput"
          value={value}
          name={name}
          onBlur = {handleBlur}
          onFocus = {handleFocus}
        />
          {errors && touched ? (
               <div className="invalid"> {errors}
               </div>
             ) : ''}
      </div>
    )
}

export default textInput;
